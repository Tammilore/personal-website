import { createMetadata } from '@/lib/metadata';
import { Section } from '@/components/section';
import clients from '@/data/clients.json';
import type { FC } from 'react';

const title = 'Clients';
const description = 'Freelance and agency clients';

export const metadata = createMetadata({ title, description, path: '/stack' });

const Stack: FC = () => (
  <>
    <section className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 dark:text-white font-medium text-sm">
        {title}
      </p>
      <p className="m-0 text-neutral-600 dark:text-neutral-400 text-sm">
        {description}
      </p>
    </section>
    <div className="flex flex-col gap-2">
      {clients.map(({ source, items }) => (
        <Section title={source} key={source}>
          {items.map((client) => (
            <p
              className="m-0 text-neutral-900 dark:text-white text-sm"
              key={client}
            >
              {client}
            </p>
          ))}
        </Section>
      ))}
    </div>
  </>
);

export default Stack;
