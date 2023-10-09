import { Work } from './components/work';
import { Intro } from './components/intro';
import { Hero } from './components/hero';
import { Apps } from './components/apps';
import { Projects } from './components/projects';
import type { FC } from 'react';

const Home: FC = () => (
  <>
    <Hero />
    <Intro />
    <Work />
    <Apps />
    <Projects />
  </>
);

export default Home;
