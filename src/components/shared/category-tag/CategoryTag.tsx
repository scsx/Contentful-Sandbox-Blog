import React from 'react';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CategoryTagProps {
  categoryName: string;
  categorySlug: string;
  isLink?: boolean;
  className?: string;
}

const CATEGORY_TAG_SLUG_MAP: { [key: string]: string } = {
  tech: 'category-tag-tech',
  news: 'category-tag-news',
  future: 'category-tag-future',
};

const DEFAULT_TAG_CLASS = 'category-tag-default';

/**
 * Componente para exibir o nome da categoria com um estilo de tag.
 * Opcionalmente renderiza como um link para a página de arquivo de categoria.
 */
export const CategoryTag = ({
  categoryName,
  categorySlug,
  isLink = false,
  className,
}: CategoryTagProps) => {
  const slugClass = CATEGORY_TAG_SLUG_MAP[categorySlug] || DEFAULT_TAG_CLASS;
  const finalClass = twMerge(slugClass, className);

  if (isLink) {
    return (
      <Link href={`/categories/${categorySlug}`} className={finalClass}>
        {categoryName}
      </Link>
    );
  }

  return <span className={finalClass}>{categoryName}</span>;
};
