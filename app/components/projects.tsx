import Image from 'next/image';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import projects from '@/data/projects.json';
import type { FC } from 'react';

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
          <p className="m-0 text-neutral-600 text-xs">{project.description}</p>
        </div>
      </div>
    ))}
  </Section>
);
