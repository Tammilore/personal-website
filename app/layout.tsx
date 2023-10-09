import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { sans } from '@/lib/fonts';
import { cn, toJsonLd } from '@/lib/utils';
import type { FC, ReactNode } from 'react';
import type { Person } from 'schema-dts';

type RootLayoutProps = {
  readonly children: ReactNode;
};

const profileJsonLd = toJsonLd<Person>({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hayden Bleasel',
  brand: ['Jellypepper', 'Corellium'],
  jobTitle: 'Chief Product Officer',
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '/').href,
  sameAs: [
    'https://twitter.com/haydenbleasel',
    'https://dribbble.com/haydenbleasel',
    'https://www.instagram.com/hayden.bleasel/',
    'https://github.com/haydenbleasel/',
    'https://www.linkedin.com/in/haydenbleasel',
    'https://www.producthunt.com/@haydenbleasel',
    'https://open.spotify.com/user/haydenbleasel',
    'https://www.figma.com/@haydenbleasel',
    'https://haydenbleasel.medium.com/',
  ],
  image: new URL(
    '/images/profile-large.jpg',
    process.env.NEXT_PUBLIC_SITE_URL ?? '/'
  ).href,
  alumniOf: 'University of Technology, Sydney',
  birthPlace: {
    '@type': 'Place',
    name: 'Sydney, Australia',
  },
  familyName: 'Bleasel',
  description:
    'Australian product designer and TypeScript developer living in the U.S.',
  gender: 'Male',
  givenName: 'Hayden',
  worksFor: {
    '@type': 'Organization',
    name: 'Corellium',
  },
  workLocation: {
    '@type': 'Place',
    name: 'Delray Beach, Florida',
  },
  knowsLanguage: 'English',
  knowsAbout: [
    'Product Design',
    'TypeScript Development',
    'Product Management',
  ],
  nationality: {
    '@type': 'Country',
    name: 'Australia',
  },
});

const socialLinks = [
  {
    href: 'https://twitter.com/haydenbleasel',
    name: 'Twitter',
    image: '/images/social/twitter.svg',
  },
  {
    href: 'https://github.com/haydenbleasel',
    name: 'GitHub',
    image: '/images/social/github.svg',
  },
  {
    href: 'https://dribbble.com/haydenbleasel',
    name: 'Dribbble',
    image: '/images/social/dribbble.svg',
  },
  {
    href: 'https://www.linkedin.com/in/haydenbleasel/',
    name: 'LinkedIn',
    image: '/images/social/linkedin.svg',
  },
];

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body
      className={cn(sans.variable, 'bg-white font-sans dark:bg-neutral-950')}
    >
      {children}
      <Analytics />
      {/* eslint-disable-next-line react/no-danger, @typescript-eslint/naming-convention */}
      <div dangerouslySetInnerHTML={{ __html: profileJsonLd }} />
    </body>
  </html>
);

export default RootLayout;
