import { Work } from './components/work';
import { Intro } from './components/intro';
import { Hero } from './components/hero';
import { Apps } from './components/apps';
import { Projects } from './components/projects';
import { Blog } from './components/blog';
import type { FC } from 'react';

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
