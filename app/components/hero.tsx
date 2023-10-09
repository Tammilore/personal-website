import Image from 'next/image';
import type { FC } from 'react';

export const Hero: FC = () => (
  <section className="flex flex-col gap-8">
    <Image
      width={32}
      height={32}
      src="/avatar.jpg"
      alt="Hayden Bleasel"
      className="w-8 h-8 rounded-full object-cover m-0"
    />
    <div className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 font-medium text-sm">Hayden Bleasel</p>
      <p className="m-0 text-neutral-500 text-sm">
        Chief Product Officer at Corellium
      </p>
      <p className="m-0 text-neutral-500 text-sm">Delray Beach, FL</p>
    </div>
  </section>
);
