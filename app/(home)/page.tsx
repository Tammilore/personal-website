// import { get } from '@vercel/edge-config';
import { createMetadata } from '@/lib/metadata';
import { Work } from './components/work';
import { Intro } from './components/intro';
import { Hero } from './components/hero';
import { Apps } from './components/apps';
import { Projects } from './components/projects';
import { Blog } from './components/blog';
import { Social } from './components/social';
import { Clients } from './components/clients';
import { Announcement } from './components/announcement';
import type { AnnouncementProps } from './components/announcement';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

const title = 'Product Designer and TypeScript Developer';
const description =
  'Chief Product Officer at Corellium, advisor at Raw Studio and previously founder of Jellypepper.';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const Home = async (): Promise<ReactElement> => {
  const announcement: AnnouncementProps = {
    text: '',
    cta: '',
    link: '',
  };

  return (
    <>
      <Hero />
      {announcement ? <Announcement {...announcement} /> : null}
      <Intro />
      <Work />
      <Apps />
      <Projects />
      <Blog />
      <Clients />
      <Social />
    </>
  );
};

export default Home;
