import Image from 'next/image';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import type { FC } from 'react';

type AppProps = {
  image: string;
  name: string;
  description: string;
  link: string;
  caption?: {
    text: string;
    link?: string;
  };
};

const apps: AppProps[] = [
  {
    name: 'Refraction',
    description: 'Learn, improve and generate code with AI.',
    image: '/apps/refraction.png',
    link: 'https://www.refraction.dev/',
    caption: {
      text: 'acquired',
      link: '/blog/refraction',
    },
  },
  {
    name: 'Superlight',
    description: 'A lightweight platform for running recurring syncs.',
    image: '/apps/superlight.svg',
    link: 'https://www.superlight.app/',
  },
  {
    name: 'texts.run',
    description: 'A simple, messenger-style webpage builder.',
    image: '/apps/texts.svg',
    link: 'https://www.texts.run/',
  },
  {
    name: 'Waitlist',
    description: 'Fast, unbranded waitlists for developers.',
    image: '/apps/waitlist.svg',
    link: 'https://www.waitlist.email/',
  },
  {
    name: 'Vercel for VS Code',
    description: 'A VS Code extension for Vercel deployment status.',
    image: '/apps/vercel.svg',
    link: 'https://marketplace.visualstudio.com/items?itemName=HaydenBleasel.vercel-vscode',
  },
];

export const Apps: FC = () => (
  <Section
    title="Apps"
    footer={
      <>
        <Link href="/apps">Click here</Link> to view more apps.
      </>
    }
  >
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
  </Section>
);
