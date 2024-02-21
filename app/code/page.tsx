import Image from 'next/image';
import { Link } from '@/components/link';
import { createMetadata } from '@/lib/metadata';
import codes from '@/data/code.json';
import type { FC } from 'react';

const title = 'Code';
const description = 'Open source projects.';

export const metadata = createMetadata({
  title,
  description,
  path: '/code',
});

const Code: FC = () => (
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
      {codes.map((code) => (
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
    </div>
  </>
);

export default Code;
