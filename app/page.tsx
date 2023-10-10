import { createMetadata } from '@/lib/metadata';
import { Work } from './components/work';
import { Intro } from './components/intro';
import { Hero } from './components/hero';
import { Apps } from './components/apps';
import { Projects } from './components/projects';
import { Blog } from './components/blog';
import type { Metadata } from 'next';
import type { FC } from 'react';

const title = 'Product Designer and TypeScript Developer';
const description =
  'Chief Product Officer at Corellium, advisor at Raw Studio and previously founder of Jellypepper.';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const Home: FC = () => (
  <>
    <Hero />
    <Intro />
    <Work />
    <Apps />
    <Projects />
    <Blog />
  </>
);

export default Home;
