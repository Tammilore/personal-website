import Image from 'next/image';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import type { FC } from 'react';

type ProjectsProps = {
  image: string;
  name: string;
  description: string;
  link: string;
};

const projects: ProjectsProps[] = [
  {
    name: 'eslint-config-harmony',
    description:
      'Strict, opinionated ESLint config for modern TypeScript apps.',
    link: 'https://github.com/haydenbleasel/eslint-config-harmony',
    image: '/projects/harmony.svg',
  },
  {
    name: 'next-forge',
    description:
      'Robust and comprehensive boilerplate for modern Next.js web apps.',
    link: 'https://github.com/haydenbleasel/next-forge',
    image: '/projects/forge.svg',
  },
  {
    name: 'contentlayer-datapad',
    description:
      'Awesome Contentlayer configuration with GFM, LQIP, TOC and more.',
    link: 'https://github.com/haydenbleasel/contentlayer-datapad',
    image: '/projects/datapad.svg',
  },
];

export const Projects: FC = () => (
  <Section
    title="Open Source"
    footer={
      <>
        View more on <Link href="https://github.com/haydenbleasel">GitHub</Link>
        .
      </>
    }
  >
    {projects.map((project) => (
      <div className="flex items-center gap-4" key={project.name}>
        <Image
          src={project.image}
          alt=""
          width={36}
          height={36}
          className="w-9 h-9 rounded-lg m-0 shadow-sm"
        />
        <div>
          <p className="m-0">
            <Link href={project.link}>{project.name}</Link>
          </p>
          <p className="m-0 text-neutral-500 text-xs">{project.description}</p>
        </div>
      </div>
    ))}
  </Section>
);
