import { CtfRichText } from '@src/components/features/contentful';
import { BlockWrapperFieldsFragment } from '@src/lib/__generated/sdk';

interface TextColumnsProps {
  block: Extract<BlockWrapperFieldsFragment['content'], { __typename: 'BlockTextColumns' }>;
}

const TextColumns = ({ block }: TextColumnsProps) => {
  return (
    <div>
      {(block.title || block.internalTitle) && (
        <h2 className="mb-4">{block.title || block.internalTitle}</h2>
      )}
      {block.columns && (
        <div className="rounded-xl border border-gray300 p-4">
          {block.columns.title && (
            <h3 className="mb-3 text-lg font-semibold">{block.columns.title}</h3>
          )}
          {block.columns.text?.json && <CtfRichText json={block.columns.text.json} />}
        </div>
      )}
    </div>
  );
};

export default TextColumns;
