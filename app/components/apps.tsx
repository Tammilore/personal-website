import Link from 'next/link';
import Image from 'next/image';
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
    link: '#',
    caption: {
      text: 'acquired',
      link: '#',
    },
  },
  {
    name: 'Superlight',
    description: 'A lightweight platform for running recurring syncs.',
    image: '/apps/superlight.svg',
    link: '#',
  },
  {
    name: 'texts.run',
    description: 'A simple, messenger-style webpage builder.',
    image: '/apps/texts.svg',
    link: '#',
  },
  {
    name: 'Waitlist',
    description: 'Fast, unbranded waitlists for developers.',
    image: '/apps/waitlist.svg',
    link: '#',
  },
  {
    name: 'Vercel for VS Code',
    description: 'A VS Code extension for Vercel deployment status.',
    image: '/apps/vercel.svg',
    link: '#',
  },
];

export const Apps: FC = () => (
  <Section
    title="Apps"
    footer={
      <>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Click here
        </a>{' '}
        to view more apps.
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
            {app.name}
            {app.caption ? (
              <span className="ml-1 text-sm text-neutral-500">
                {app.caption.link ? (
                  <Link
                    href={app.caption.link}
                    className="text-inherit font-normal"
                  >
                    ({app.caption.text})
                  </Link>
                ) : (
                  `(${app.caption.text})`
                )}
              </span>
            ) : null}
          </p>
          <p className="m-0 text-neutral-500 text-xs">{app.description}</p>
        </div>
      </div>
    ))}
  </Section>
);
