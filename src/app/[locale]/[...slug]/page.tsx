import { CSSProperties } from 'react';

import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { ArticleContent, ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { Breadcrumbs } from '@src/components/features/breadcrumbs/Breadcrumbs';
import FAQs from '@src/components/page-builder/FAQs';
import Hero from '@src/components/page-builder/Hero';
import TextColumns from '@src/components/page-builder/TextColumns';
import { Container } from '@src/components/shared/container';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';
import {
  BlockWrapperFieldsFragment,
  PageBlogPostFieldsFragment,
  PageBuilderFieldsFragment,
} from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';

const getSlugPath = (slug: string[] | undefined): string => (slug || []).join('/');

const parseSpacing = (value?: string | null): string | undefined => {
  if (!value) return undefined;

  if (/^-?\d+(\.\d+)?$/.test(value.trim())) {
    return `${value}px`;
  }

  return value;
};

const getWidthClass = (width?: string | null): string => {
  const normalizedWidth = width?.toLowerCase().trim();

  switch (normalizedWidth) {
    case '1/4':
      return 'mx-auto w-full md:w-1/4 px-4';
    case '1/3':
      return 'mx-auto w-full md:w-1/3 px-4';
    case '1/2':
      return 'mx-auto w-full md:w-1/2 px-4';
    case '2/3':
      return 'mx-auto w-full md:w-2/3 px-4';
    case '3/4':
      return 'mx-auto w-full md:w-3/4 px-4';
    case 'xs':
      return 'mx-auto w-full max-w-xl px-4';
    case 'sm':
      return 'mx-auto w-full max-w-3xl px-4';
    case 'md':
      return 'mx-auto w-full max-w-5xl px-4';
    case 'lg':
      return 'mx-auto w-full max-w-6xl px-4';
    case 'xl':
      return 'mx-auto w-full max-w-7xl px-4';
    case '2xl':
    case 'full':
      return 'mx-auto w-full max-w-8xl px-4';
    default:
      return 'mx-auto w-full max-w-8xl px-4';
  }
};

const renderBlockContent = (section: BlockWrapperFieldsFragment) => {
  const block = section.content;

  if (!block) {
    return null;
  }

  if (block.__typename === 'BlockFaQs') {
    return <FAQs block={block} />;
  }

  if (block.__typename === 'BlockHero') {
    return <Hero block={block} />;
  }

  if (block.__typename === 'BlockTextColumns') {
    return <TextColumns block={block} />;
  }

  return null;
};

const renderPageBuilder = (pageBuilder: PageBuilderFieldsFragment) => {
  return (
    <>
      {pageBuilder.sectionsCollection?.items
        ?.filter((section): section is NonNullable<typeof section> => Boolean(section))
        .map(section => {
          const sectionStyle: CSSProperties = {
            backgroundColor: section.backgroundColor || undefined,
            paddingTop: parseSpacing(section.paddingTop),
            paddingBottom: parseSpacing(section.paddingBottom),
            backgroundImage: section.backgroundImage?.url
              ? `url(${section.backgroundImage.url})`
              : undefined,
            backgroundSize: section.backgroundImage?.url ? 'cover' : undefined,
            backgroundPosition: section.backgroundImage?.url ? 'center' : undefined,
          };

          return (
            <section key={section.sys.id} style={sectionStyle} className="w-full">
              <div className={twMerge(getWidthClass(section.width), 'py-4')}>
                {renderBlockContent(section)}
              </div>
            </section>
          );
        })}
    </>
  );
};

const getPageData = async ({
  locale,
  slugPath,
  preview,
}: {
  locale: string;
  slugPath: string;
  preview: boolean;
}) => {
  const gqlClient = preview ? previewClient : client;

  const [pageBuilderResult, blogPostResult] = await Promise.all([
    gqlClient.pageBuilder({ locale, slug: slugPath, preview }),
    gqlClient.pageBlogPost({ locale, slug: slugPath, preview }),
  ]);

  return {
    pageBuilder: pageBuilderResult.pageBuilderCollection?.items[0],
    blogPost: blogPostResult.pageBlogPostCollection?.items[0],
  };
};

export async function generateMetadata({
  params: { locale, slug },
}: DynamicPageProps): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const slugPath = getSlugPath(slug);
  const { pageBuilder, blogPost } = await getPageData({ locale, slugPath, preview });

  const languages = Object.fromEntries(
    locales.map(locale => [
      locale,
      locale === defaultLocale ? `/${slugPath}` : `/${locale}/${slugPath}`,
    ]),
  );

  const metadata: Metadata = {
    alternates: {
      canonical: slugPath,
      languages,
    },
  };

  if (pageBuilder) {
    metadata.title = pageBuilder.title || slugPath;
    return metadata;
  }

  if (blogPost?.seoFields) {
    metadata.title = blogPost.seoFields.pageTitle;
    metadata.description = blogPost.seoFields.pageDescription;
    metadata.robots = {
      follow: !blogPost.seoFields.nofollow,
      index: !blogPost.seoFields.noindex,
    };
  }

  return metadata;
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<DynamicPageProps['params'][]> {
  const { pageBlogPostCollection, pageBuilderCollection } = await client
    .pageBuilderCollection({
      locale,
      limit: 100,
    })
    .then(async pageBuilderData => {
      const pageBlogPosts = await client.pageBlogPostCollection({ locale, limit: 100 });

      return {
        pageBuilderCollection: pageBuilderData.pageBuilderCollection,
        pageBlogPostCollection: pageBlogPosts.pageBlogPostCollection,
      };
    });

  const allSlugs = [
    ...(pageBlogPostCollection?.items || []).map(item => item?.slug),
    ...(pageBuilderCollection?.items || []).map(item => item?.slug),
  ].filter((currentSlug): currentSlug is string => Boolean(currentSlug));

  const uniqueSlugs = [...new Set(allSlugs)];

  return uniqueSlugs.map(currentSlug => ({
    locale,
    slug: currentSlug.split('/').filter(Boolean),
  }));
}

interface DynamicPageProps {
  params: {
    locale: string;
    slug: string[];
  };
}

export default async function Page({ params: { locale, slug } }: DynamicPageProps) {
  const { isEnabled: preview } = draftMode();
  const slugPath = getSlugPath(slug);
  const { t } = await initTranslations({ locale });

  const { pageBuilder, blogPost } = await getPageData({ locale, slugPath, preview });

  if (pageBuilder) {
    return renderPageBuilder(pageBuilder);
  }

  if (!blogPost) {
    notFound();
  }

  const { pageLandingCollection } = await (preview ? previewClient : client).pageLanding({
    locale,
    preview,
  });

  const landingPage = pageLandingCollection?.items[0];
  const relatedPosts = blogPost.relatedBlogPostsCollection?.items;
  const isFeatured = Boolean(
    blogPost.slug && landingPage?.featuredBlogPost?.slug === blogPost.slug,
  );

  const breadcrumbsItems = getBlogBreadcrumbs({ t, locale, slugPath, blogPost });

  return (
    <>
      <Container>
        {blogPost.category?.name && blogPost.category?.slug && (
          <Breadcrumbs items={breadcrumbsItems} className="mt-8 mb-4" />
        )}
        <ArticleHero
          article={blogPost}
          isFeatured={isFeatured}
          isReversedLayout={true}
          isArticlePage
        />
      </Container>
      <Container className="mt-8 max-w-4xl">
        <ArticleContent article={blogPost} />
      </Container>
      {relatedPosts && (
        <Container className="mt-8 max-w-5xl">
          <h2 className="mb-4 md:mb-6">{t('article.relatedArticles')}</h2>
          <ArticleTileGrid className="md:grid-cols-2" articles={relatedPosts} />
        </Container>
      )}
    </>
  );
}

const getBlogBreadcrumbs = ({
  t,
  locale,
  slugPath,
  blogPost,
}: {
  t: (key: string) => string;
  locale: string;
  slugPath: string;
  blogPost: PageBlogPostFieldsFragment;
}) => {
  const categoryName = blogPost.category?.name;
  const categorySlug = blogPost.category?.slug;

  return [
    { label: t('common.home') || 'Home', href: `/${locale}` },
    ...(categoryName && categorySlug
      ? [{ label: categoryName, href: `/${locale}/categories/${categorySlug}` }]
      : []),
    { label: blogPost.title || slugPath, href: `/${locale}/${slugPath}` },
  ];
};
