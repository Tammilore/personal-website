import Image from 'next/image';
import { Link } from '@/components/link';
import { createMetadata } from '@/lib/metadata';
import apps from '@/data/apps.json';
import type { FC } from 'react';

const title = 'Stack';
const description = 'Tools and technologies I use.';

export const metadata = createMetadata({ title, description, path: '/apps' });

const Apps: FC = () => (
  <>
    <section className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 font-medium text-sm">{title}</p>
      <p className="m-0 text-neutral-600 text-sm">{description}</p>
    </section>
    <div className="flex flex-col gap-2">
      {apps.map((app) => (
        <div className="flex items-center gap-4" key={app.name}>
          <Image
            src={app.image}
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 rounded-lg m-0 shadow-sm"
          />
          <div>
            <p className="m-0">
              <Link href={app.link}>{app.name}</Link>
              {app.caption ? (
                <span className="ml-1 text-sm text-neutral-600">
                  {app.caption.link ? (
                    <Link className="text-inherit" href={app.caption.link}>
                      ({app.caption.text})
                    </Link>
                  ) : (
                    `(${app.caption.text})`
                  )}
                </span>
              ) : null}
            </p>
            <p className="m-0 text-neutral-600 text-xs">{app.description}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Apps;