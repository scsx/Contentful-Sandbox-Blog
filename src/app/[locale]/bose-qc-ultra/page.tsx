// src/app/[locale]/bose-qc-ultra/page.tsx

import type { Metadata } from 'next';
import { client } from '@src/lib/client';
import { notFound } from 'next/navigation';

// O slug que estamos a testar
const PAGE_SLUG = 'bose-qc-ultra';

// --- Função Assíncrona para Busca de Dados ---
// Esta função é um Server Component e roda no terminal/servidor
async function getPageData(locale: string) {
  try {
    // 2. Chama a query 'staticPage' (o nome que definiu no .graphql)
    const data = await client.staticPage({
      slug: PAGE_SLUG,
      locale: locale,
      preview: false, // Pode ser true para ver rascunhos
    });

    // 3. Extrai o item (o primeiro post da coleção)
    const pageContent = data.staticPageCollection?.items?.[0];

    // 4. LOG NO CONSOLE (Verificação de Dados!)
    console.log('--- DADOS RECEBIDOS DO CONTENTFUL ---');
    console.log(pageContent);
    console.log('-------------------------------------');

    return pageContent;
  } catch (error) {
    console.error('Erro ao buscar dados do Contentful:', error);
    return null;
  }
}

// --- Componente de Página (Renderização) ---
export default async function StaticPage({ params }: { params: { locale: string } }) {
  const pageContent = await getPageData(params.locale);

  // Se a busca falhar ou retornar null
  if (!pageContent) {
    // Isso vai para o terminal
    console.log(`Página com slug ${PAGE_SLUG} não encontrada ou erro de busca.`);
    return notFound();
  }

  // --- Renderização da UI (com dados do console) ---
  return (
    <div className="container mx-auto px-4 py-16">
      {/* 5. Usamos o Título que definimos no Contentful (tituloExterno) */}
      <h1 className="mb-6 text-4xl font-bold">{pageContent.tituloExterno}</h1>

      {/* Apenas um texto de placeholder enquanto verifica o console */}
      <p className="text-gray-700">
        Dados do Contentful buscados. Verifique o **TERMINAL** para ver o objeto completo.
      </p>

      {pageContent.richText && (
        <pre className="bg-gray-100 max-w-full overflow-auto rounded p-4 text-xs">
          {JSON.stringify(pageContent.richText.json, null, 2)}
        </pre>
      )}
    </div>
  );
}

// --- Metadados (SEO) ---
// Função de metadata precisa ser separada no Next.js App Router
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const pageContent = await getPageData(params.locale);

  return {
    title: pageContent?.tituloExterno || 'Página Estática',
  };
}
