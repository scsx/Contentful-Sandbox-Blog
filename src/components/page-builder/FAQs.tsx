import { CtfRichText } from '@src/components/features/contentful';
import { BlockWrapperFieldsFragment } from '@src/lib/__generated/sdk';

interface FAQsProps {
  block: Extract<BlockWrapperFieldsFragment['content'], { __typename: 'BlockFaQs' }>;
}

const FAQs = ({ block }: FAQsProps) => {
  return (
    <div>
      {block.title && <h2 className="mb-6">{block.title}</h2>}
      <div className="space-y-4">
        {block.itemsCollection?.items
          ?.filter(item => Boolean(item))
          .map(item => {
            if (!item) return null;

            return (
              <details key={item.sys.id} className="rounded-xl border border-gray300 p-4">
                <summary className="cursor-pointer text-lg font-semibold">{item.title}</summary>
                {item.text?.json && (
                  <div className="mt-3">
                    <CtfRichText json={item.text.json} />
                  </div>
                )}
              </details>
            );
          })}
      </div>
    </div>
  );
};

export default FAQs;
