import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
// Importações do seu cliente GQL
import { NotaDeImprensaOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';

// Tipagens e Query geradas

// --- Constantes e Tipagem de Props ---
const i18nNamespaces = ['press', 'common'];

interface PressReleasesPageProps {
  params: {
    locale: string;
  };
}

// --- 1. generateMetadata (Opcional, mas segue o seu padrão) ---
export async function generateMetadata({ params }: PressReleasesPageProps): Promise<Metadata> {
  return {
    title: 'Notas de Imprensa',
    description: 'Todas as notas de imprensa e comunicados da empresa.',
  };
}

// --- 2. COMPONENTE DA PÁGINA DE LISTA ---
export default async function PressReleasesPage({ params: { locale } }: PressReleasesPageProps) {
  const { isEnabled: preview } = draftMode();
  const { t, resources } = await initTranslations({ locale, namespaces: i18nNamespaces });
  const gqlClient = preview ? previewClient : client;

  // Variáveis da Query
  const limit = 20;

  // EXECUTA A QUERY GRAPHQL (Usando a tipagem de lista)
  const result = await gqlClient.GetPressReleasesList({
    locale,
    limit,
    order: NotaDeImprensaOrder.PublishDateDesc,
  });

  const releases = result.notaDeImprensaCollection?.items;

  if (!releases) {
    notFound();
  }

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <Container className="pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-10">
          {t('press:pageTitle', { defaultValue: 'Notas de Imprensa' })}
        </h1>

        <div className="space-y-8">
          {releases.length > 0 ? (
            releases.map(release => {
              // Certifique-se de que os campos chave existem
              if (!release || !release.slug || !release.title || !release.publishDate) return null;

              return (
                <article key={release.slug} className="border-b pb-4">
                  {/* Link para a página de detalhe (/notas-de-imprensa/[slug]) */}
                  <Link href={`/notas-de-imprensa/${release.slug}`} className="group block">
                    <h2 className="text-2xl font-semibold text-blue-800 group-hover:underline">
                      {release.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(release.publishDate).toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </Link>
                </article>
              );
            })
          ) : (
            <p className="text-lg text-gray-700">
              {t('press:noReleases', { defaultValue: 'Nenhuma Nota de Imprensa encontrada.' })}
            </p>
          )}
        </div>
      </Container>
    </TranslationsProvider>
  );
}
