import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import { Link } from '@/components/link';
import { sans } from '@/lib/fonts';
import { cn, toJsonLd } from '@/lib/utils';
import { NextThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
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

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        sans.variable,
        'bg-neutral-100 font-sans dark:bg-neutral-950 antialiased'
      )}
    >
      <NextThemeProvider>
        <div className="prose prose-sm prose-neutral dark:prose-invert mx-auto flex flex-col gap-8 py-24 max-w-[30rem]">
          <Link href="/" aria-label="Home" className="w-fit">
            <Image
              width={32}
              height={32}
              src="/avatar.jpg"
              alt="Hayden Bleasel"
              className="w-8 h-8 rounded-full object-cover m-0"
            />
          </Link>
          <div className="flex flex-col gap-16">{children}</div>
        </div>
        <Navigation />
      </NextThemeProvider>
      <Analytics />
      {/* eslint-disable-next-line react/no-danger, @typescript-eslint/naming-convention */}
      <div dangerouslySetInnerHTML={{ __html: profileJsonLd }} />
    </body>
  </html>
);

export default RootLayout;
