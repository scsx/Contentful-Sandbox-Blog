import React from 'react';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CategoryTagProps {
  categoryName: string;
  categorySlug: string;
  isLink?: boolean;
  className?: string;
}

const CATEGORY_COLORS: { [key: string]: string } = {
  tech: 'bg-blue500 hover:bg-blue700',
  news: 'bg-green400 hover:bg-green700',
  future: 'bg-purple500 hover:bg-purple700',
};

const DEFAULT_COLOR = 'bg-green600 hover:bg-green700';

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
  const colorClasses = CATEGORY_COLORS[categorySlug] || DEFAULT_COLOR;
  const baseClasses = twMerge(
    'inline-block w-auto rounded-full px-4 py-0.5 text-xs font-medium leading-4 text-[#FFF]',
    colorClasses,
    className,
  );

  if (isLink) {
    return (
      <Link
        href={`/categories/${categorySlug}`}
        className={twMerge(baseClasses, 'transition duration-150 ease-in-out')}>
        {categoryName}
      </Link>
    );
  }

  return <span className={baseClasses}>{categoryName}</span>;
};
