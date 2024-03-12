import type { FC } from 'react';

export const Hero: FC = () => (
  <section className="flex flex-col gap-1">
    <p className="m-0 text-neutral-900 dark:text-white font-medium text-sm">
      Tamilore Lawal
    </p>
    <p className="m-0 text-neutral-600 dark:text-neutral-400 text-sm">
      Product Manager and Software Engineer
    </p>
    <p className="m-0 text-neutral-600 dark:text-neutral-400 text-sm">
      United Kingdom
    </p>
  </section>
);
