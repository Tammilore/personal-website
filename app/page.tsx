import { Work } from './components/work';
import { Intro } from './components/intro';
import { Hero } from './components/hero';
import { Apps } from './components/apps';
import type { FC } from 'react';

const Home: FC = () => (
  <>
    <Hero />
    <Intro />
    <Work />
    <Apps />
  </>
);

export default Home;
