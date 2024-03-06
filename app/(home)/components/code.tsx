import Image from 'next/image';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import codes from '@/data/code.json';
import type { FC } from 'react';

export const Code: FC = () => (
  <Section
    title="Open (and closed) source"
    footer={
      <>
        <Link href="/code">Click here</Link> to see other projects.
      </>
    }
  >
    {codes
      .filter(({ featured }) => featured)
      .map((code) => (
        <div className="flex items-center gap-4" key={code.name}>
          {/* <Image
            src={app.image}
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 rounded-lg m-0 shadow-sm"
          /> */}
          <div>
            <p className="m-0">
              <Link href={code.link}>{code.name}</Link>
            </p>
            <p className="m-0 text-neutral-600 dark:text-neutral-400 text-xs">
              {code.description}
            </p>
          </div>
        </div>
      ))}
  </Section>
);
