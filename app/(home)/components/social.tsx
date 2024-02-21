import Image from 'next/image';
import { Section } from '@/components/section';
import type { FC } from 'react';

const socialLinks = [
  {
    href: 'https://twitter.com/blacqee_',
    name: 'X',
    image: '/social/x.svg',
  },
  {
    href: 'https://github.com/Tammilore',
    name: 'GitHub',
    image: '/social/github.svg',
  },
  {
    href: 'https://www.linkedin.com/in/oluwatamilore-lawal/',
    name: 'LinkedIn',
    image: '/social/linkedin.svg',
  },
];

export const Social: FC = () => (
  <Section title="Connect">
    <div className="flex items-center gap-8">
      {socialLinks.map(({ href, name, image }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={name}
            className="m-0 w-5 h-5 hover:brightness-0 transition-all"
            width={20}
            height={20}
          />
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </div>
  </Section>
);
