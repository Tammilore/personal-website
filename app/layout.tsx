import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import { Link } from '@/components/link';
import { sans } from '@/lib/fonts';
import { cn, toJsonLd } from '@/lib/utils';
import { Navigation } from '@/components/navigation';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { FC, ReactNode } from 'react';
import type { Person } from 'schema-dts';

type RootLayoutProps = {
  readonly children: ReactNode;
};

const profileJsonLd = toJsonLd<Person>({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tamilore Lawal',
  brand: ['Zing'],
  jobTitle: 'Product Manager',
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '/').href,
  sameAs: [
    'https://twitter.com/blacqee_',
    'https://github.com/Tammilore/',
    'https://www.linkedin.com/in/oluwatamiore-lawal',
  ],
  image: new URL(
    '/images/profile-large.jpg',
    process.env.NEXT_PUBLIC_SITE_URL ?? '/'
  ).href,
  alumniOf: 'University of Lagos',
  birthPlace: {
    '@type': 'Place',
    name: 'Lagos, Nigeria',
  },
  familyName: 'Lawal',
  description: 'Product Manager and Developer',
  gender: 'Female',
  givenName: 'Tamilore',
  worksFor: {
    '@type': 'Organization',
    name: 'Zing',
  },
  workLocation: {
    '@type': 'Place',
    name: 'Lagos, Nigeria',
  },
  knowsLanguage: 'English',
  knowsAbout: ['No-code Development', 'MERN', 'Product Management'],
  nationality: {
    '@type': 'Country',
    name: 'Nigeria',
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
      <ScrollArea>
        <Providers>
          <div
            className={cn(
              'px-4 mx-auto flex flex-col gap-8 py-16 sm:py-24 max-w-[30rem]',
              'prose prose-sm prose-neutral',
              'dark:prose-invert'
            )}
          >
            <Link href="/" aria-label="Home" className="w-fit">
              <Image
                width={32}
                height={32}
                src="/icon.png"
                alt="Tamilore Lawal"
                className="w-8 h-8 rounded-full object-cover m-0"
              />
            </Link>
            <div className="flex flex-col gap-16">{children}</div>
          </div>
          <Navigation />
        </Providers>
      </ScrollArea>
      <Analytics />
      <Toaster />
      {/* eslint-disable-next-line react/no-danger, @typescript-eslint/naming-convention */}
      <div dangerouslySetInnerHTML={{ __html: profileJsonLd }} />
    </body>
  </html>
);

export default RootLayout;
