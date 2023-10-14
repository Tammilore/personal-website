import type { FC } from 'react';

export const Hero: FC = () => (
  <section className="flex flex-col gap-1">
    <p className="m-0 text-neutral-900 dark:text-white font-medium text-sm">
      Hayden Bleasel
    </p>
    <p className="m-0 text-neutral-600 dark:text-neutral-400 text-sm">
      Chief Product Officer at Corellium
    </p>
    <p className="m-0 text-neutral-600 dark:text-neutral-400 text-sm">
      Delray Beach, FL
    </p>
  </section>
);
