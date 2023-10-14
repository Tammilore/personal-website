import { Link } from '@/components/link';
import { createMetadata } from '@/lib/metadata';
import { Section } from '@/components/section';
import stack from '@/data/stack.json';
import type { FC } from 'react';

const title = 'Stack';
const description = 'Tools and technologies I use.';

export const metadata = createMetadata({ title, description, path: '/stack' });

const stackByType = stack.reduce<Record<string, typeof stack>>((acc, post) => {
  const { type } = post;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (Object.hasOwnProperty.call(acc, type)) {
    acc.type = [...acc.type, post];
  }

  return { ...acc, [type]: [post] };
}, {});

const Stack: FC = () => (
  <>
    <section className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 font-medium text-sm">{title}</p>
      <p className="m-0 text-neutral-600 text-sm">{description}</p>
    </section>
    <div className="flex flex-col gap-2">
      {Object.entries(stackByType).map(([type, items]) => (
        <Section title={type} key={type}>
          {items.map((tool) => (
            <div
              className="flex items-center gap-4 justify-between"
              key={tool.name}
            >
              <Link
                className="m-0 text-neutral-900 text-sm truncate w-[7rem]"
                href={tool.href}
              >
                {tool.name}
              </Link>
              <p className=" m-0 text-neutral-600 text-xs text-right">
                {tool.description}
              </p>
            </div>
          ))}
        </Section>
      ))}
    </div>
  </>
);

export default Stack;
