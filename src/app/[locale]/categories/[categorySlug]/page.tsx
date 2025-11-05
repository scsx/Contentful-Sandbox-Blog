import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { ArticleTileGrid } from '@src/components/features/article';
import { Breadcrumbs } from '@src/components/features/breadcrumbs/Breadcrumbs';
import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
import { CategoryPageQuery } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';

interface CategoryPageProps {
  params: {
    locale: string;
    categorySlug: string;
  };
}

// Função para gerar metadados (opcional, mas boa prática)
export async function generateMetadata({
  params: { locale, categorySlug },
}: CategoryPageProps): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const data: CategoryPageQuery = await gqlClient.CategoryPage({ categorySlug, locale, preview });
  const category = data.categoryCollection?.items[0];

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} Articles`,
    description: `A list of all articles published in the ${category.name} category.`,
  };
}

export default async function CategoryPage({
  params: { locale, categorySlug },
}: CategoryPageProps) {
  const { isEnabled: preview } = draftMode();
  const { t, resources } = await initTranslations({ locale });
  const gqlClient = preview ? previewClient : client;

  // Busca os dados filtrados
  const data: CategoryPageQuery = await gqlClient.CategoryPage({ categorySlug, locale, preview });
  const categoryName = data.categoryCollection?.items[0]?.name;
  const posts = data.pageBlogPostCollection?.items;

  // Se a categoria não existe ou não tem posts (e não estamos em preview), retorna 404
  if (!categoryName && !preview) {
    notFound();
  }

  // Renderiza o título e a grelha de artigos
  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: t('home') || 'Home', href: `/${locale}` },
            { label: categoryName || categorySlug, href: `/${locale}/categories/${categorySlug}` },
          ]}
          className="mb-8 mt-4"
        />

        <h1 className="mb-8 text-3xl font-bold">
          {t('category.category') || 'Category'}: {categoryName || categorySlug}
        </h1>

        {posts && posts.length > 0 ? (
          <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
        ) : (
          <p className="text-gray-600">
            {t('category.noPosts') || 'No articles found in this category.'}
          </p>
        )}
      </Container>
    </TranslationsProvider>
  );
}
