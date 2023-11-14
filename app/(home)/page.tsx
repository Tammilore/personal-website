// import { get } from '@vercel/edge-config';
import { createMetadata } from '@/lib/metadata';
import { Work } from './components/work';
import { Intro } from './components/intro';
import { Hero } from './components/hero';
import { Apps } from './components/apps';
import { Projects } from './components/projects';
import { Blog } from './components/blog';
import { Thoughts } from './components/thoughts';
import { Social } from './components/social';
import { Clients } from './components/clients';
import { Announcement } from './components/announcement';
import type { AnnouncementProps } from './components/announcement';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

const title = 'Product Manager and No-code Developer';
const description = 'Founder, Zing. Previously at Bloc and Helicarrier';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const Home = async (): Promise<ReactElement> => {
  const announcement: AnnouncementProps = {
    text: 'I will be speaking at the No-Code Tech Summit this year',
    cta: 'Get your ticket',
    link: '',
  };

  const announcement2: AnnouncementProps = {
    text: 'We are starting a product newsletter!',
    cta: 'Subscribe',
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
      <Thoughts />
      {/* {announcement2 ? <Announcement {...announcement} /> : null} */}
      {/* <Clients /> */}
      <Social />
    </>
  );
};

export default Home;
