import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
import { client, previewClient } from '@src/lib/client';

interface VehiclesPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Vehicles',
    description: 'Vehicle collection',
  };
}

export default async function VehiclesPage({ params: { locale } }: VehiclesPageProps) {
  const { isEnabled: preview } = draftMode();
  const { resources } = await initTranslations({ locale });
  const gqlClient = preview ? previewClient : client;

  const result = await gqlClient.vehicleCollection({
    locale,
    preview,
    limit: 100,
  });

  const vehicles = result.vehicleCollection?.items ?? [];

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <Container className="py-16">
        <h1 className="mb-8 text-4xl font-bold">Vehicles</h1>

        {vehicles.length === 0 ? (
          <p>No vehicles found.</p>
        ) : (
          <div className="space-y-6">
            {vehicles.map((vehicle, index) => {
              if (!vehicle) {
                return null;
              }

              return (
                <article key={`${vehicle.name ?? 'vehicle'}-${index}`} className="border-b pb-4">
                  <h2 className="text-2xl font-semibold">{vehicle.name}</h2>
                  {vehicle.details ? (
                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm">
                      {JSON.stringify(vehicle.details, null, 2)}
                    </pre>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </Container>
    </TranslationsProvider>
  );
}
