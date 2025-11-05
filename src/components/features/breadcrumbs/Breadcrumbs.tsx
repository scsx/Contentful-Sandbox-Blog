import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  // O último item na lista é sempre o atual e não deve ser um Link
  const lastIndex = items.length - 1;

  return (
    <nav aria-label="Breadcrumb">
      <ol className={twMerge('text-gray-500 flex items-center space-x-2 text-sm', className)}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < lastIndex ? (
              <>
                <Link
                  href={item.href}
                  className="text-blue500 transition duration-150 ease-in-out font-bold hover:underline">
                  {item.label}
                </Link>
                <span className='ml-2'>/</span>
              </>
            ) : (
              // Página actual, sem link
              <span className="text-gray-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
