'use client';

import BlogLogo from '@icons/blog-logo.svg';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            <BlogLogo />
          </Link>
          <div className="flex space-x-4">
            <Link href="/bose-qc-ultra">Bose QC Ultra</Link>
            <Link href="/notas-de-imprensa">Notas de Imprensa</Link>
            <LanguageSelector />
          </div>
        </Container>
      </nav>
    </header>
  );
};
