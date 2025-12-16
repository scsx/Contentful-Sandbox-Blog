import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
import { locales } from '@src/i18n/config';
import { client, previewClient } from '@src/lib/client';

export const dynamicParams = true;

// --- CONFIGURAÇÃO DO RICH TEXT RENDERER ---
const i18nNamespaces = ['press', 'common'];

// --- Tipagem de Props ---
interface PressReleasePageProps {
  params: {
    locale: string;
    slug: string;
  };
}

// --- 1. FUNÇÃO generateStaticParams (Busca todos os slugs para pré-renderização) ---
export async function generateStaticParams() {
  const gqlClient = client;
  const paths: { slug: string; locale?: string }[] = [];

  for (const locale of locales) {
    const result = await gqlClient.GetPressReleasesList({
      locale,
      limit: 1000,
      order: [],
    });

    const slugs = result.notaDeImprensaCollection?.items.map(item => item?.slug).filter(Boolean);

    if (!slugs) continue;

    slugs.forEach(slug => {
      paths.push(locale === 'en-US' ? { slug: slug as string } : { slug: slug as string, locale });
    });
  }

  return paths;
}

// --- 2. COMPONENTE DA PÁGINA DE DETALHE ---
export default async function PressReleaseDetailPage({ params }: PressReleasePageProps) {
  const { slug, locale } = params;
  const effectiveLocale = locale ?? 'en-US';
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const { resources } = await initTranslations({
    locale: effectiveLocale,
    namespaces: i18nNamespaces,
  });

  const result = await gqlClient.GetPressReleaseBySlug({
    slug,
    locale: effectiveLocale,
    preview,
  });

  const release = result.notaDeImprensaCollection?.items[0];
  const bodyJson = release?.body?.json;
  const htmlContent = bodyJson?.content?.[0]?.content?.[0]?.value;

  if (!release || !release.body || !release.title || !release.publishDate) {
    notFound();
  }

  const { title, publishDate } = release;

  return (
    <TranslationsProvider locale={effectiveLocale} resources={resources}>
      <Container className="pt-16 pb-32 max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="text-sm text-gray-500 mb-2">
            {new Date(publishDate).toLocaleDateString(effectiveLocale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">{title}</h1>
        </header>

        <div className="prose prose-blue max-w-none">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </Container>
    </TranslationsProvider>
  );
}
