import Image from 'next/image';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import apps from '@/data/apps.json';
import type { FC } from 'react';

export const Apps: FC = () => (
  <Section
    title="Apps"
    footer={
      <>
        <Link href="/apps">Click here</Link> to view more apps.
      </>
    }
  >
    {apps
      .filter(({ featured }) => featured)
      .map((app) => (
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
              {app.captionLink && app.captionText ? (
                <Link
                  className="text-inherit ml-1 text-sm text-neutral-600"
                  href={app.captionLink as string}
                >
                  ({app.captionText})
                </Link>
              ) : null}
              {app.captionLink && !app.captionText ? (
                <span className="ml-1 text-sm text-neutral-600">
                  ({app.captionText})
                </span>
              ) : null}
            </p>
            <p className="m-0 text-neutral-600 text-xs">{app.description}</p>
          </div>
        </div>
      ))}
  </Section>
);
