import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { Document } from '@contentful/rich-text-types';

// O tipo esperado para o campo richText.json
interface RichTextProps {
  content: Document;
}

// Para contornar os erros de tipagem do ambiente, tipamos 'options' como 'any'
const options: any = {
  renderNode: {
    // BLOCKS (Elementos de Bloco)
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      // Garanta que o JSX está dentro de parênteses curvos ()
      <p className="mb-4 leading-relaxed">{children}</p>
    ),

    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="mb-4 mt-8 border-b pb-2 text-3xl font-semibold">{children}</h2>
    ),

    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="mb-3 mt-6 text-2xl font-semibold">{children}</h3>
    ),

    // Listas
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="mb-4 ml-6 list-disc">{children}</ul>
    ),

    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="mb-4 ml-6 list-decimal">{children}</ol>
    ),

    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="mb-1">{children}</li>,

    // INLINES (Links)
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline">
        {children}
      </a>
    ),

    // NOTA: Se o seu Rich Text incluir Assets Embutidos (imagens), a lógica
    // [BLOCKS.EMBEDDED_ASSET] deve ser implementada aqui.
  },
};

// O Componente Principal
const RichText: React.FC<RichTextProps> = ({ content }) => {
  if (!content) return null;
  // Transforma o JSON do Contentful em elementos React
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
