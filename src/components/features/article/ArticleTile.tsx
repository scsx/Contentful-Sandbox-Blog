'use client';

import { HTMLProps } from 'react';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { ArticleAuthor } from '@src/components/features/article/ArticleAuthor';
import { CtfImage } from '@src/components/features/contentful';
import { FormatDate } from '@src/components/shared/format-date';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleTileProps extends HTMLProps<HTMLDivElement> {
  article: PageBlogPostFieldsFragment;
}

export const ArticleTile = ({ article, className }: ArticleTileProps) => {
  const { featuredImage, publishedDate, slug, title } = useContentfulLiveUpdates(article);
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  return (
    <Link className="flex flex-col" href={`/${slug}`}>
      <div
        className={twMerge(
          'flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg',
          className,
        )}>
        {featuredImage && (
          <div {...inspectorProps({ fieldId: 'featuredImage' })}>
            <CtfImage
              nextImageProps={{ className: 'object-cover aspect-[16/10] w-full' }}
              {...featuredImage}
            />
          </div>
        )}
        <div className="flex flex-1 flex-col px-4 py-3 md:px-5 md:py-4 lg:px-7 lg:py-5">
          {title && (
            <p className="h3 mb-2 text-gray800 md:mb-3" {...inspectorProps({ fieldId: 'title' })}>
              {title}
            </p>
          )}

          <div className="mt-auto flex items-center">
            <div className="flex">
              <ArticleAuthor article={article} />
              {article.category && (
                <span
                  className="ml-4 mt-2 text-xs font-bold leading-none text-gray700"
                  {...inspectorProps({ fieldId: 'category' })}>
                  {article.category.name}
                </span>
              )}
            </div>
            <div
              className={twMerge('ml-auto pl-2 text-xs text-gray600')}
              {...inspectorProps({ fieldId: 'publishedDate' })}>
              <FormatDate date={publishedDate} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
