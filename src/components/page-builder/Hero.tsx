import Link from 'next/link';

import { CtfImage } from '@src/components/features/contentful';
import { BlockWrapperFieldsFragment } from '@src/lib/__generated/sdk';

interface HeroProps {
  block: Extract<BlockWrapperFieldsFragment['content'], { __typename: 'BlockHero' }>;
}

const Hero = ({ block }: HeroProps) => {
  return (
    <div className="grid items-center gap-6 md:grid-cols-2">
      <div>
        {block.title && <h1 className="mb-3">{block.title}</h1>}
        {block.subtitle && <p className="mb-5 text-lg text-gray600">{block.subtitle}</p>}
        {block.ctaText && block.ctaUrl && (
          <Link
            href={block.ctaUrl}
            className="inline-flex rounded-lg border border-gray900 px-5 py-3 font-semibold hover:bg-gray100">
            {block.ctaText}
          </Link>
        )}
      </div>
      {block.backgroundImage && (
        <CtfImage
          {...block.backgroundImage}
          nextImageProps={{ className: 'h-auto w-full rounded-xl object-cover' }}
        />
      )}
    </div>
  );
};

export default Hero;
