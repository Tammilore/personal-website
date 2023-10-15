import Image from 'next/image';
import { StarIcon } from '@radix-ui/react-icons';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import projects from '@/data/projects.json';
import { octokit } from '@/lib/octokit';
import type { FC } from 'react';

const Project = async ({
  data,
}: {
  readonly data: (typeof projects)[number];
}) => {
  const repo = await octokit.rest.repos.get({
    owner: 'haydenbleasel',
    repo: data.name,
  });

  return (
    <div className="flex items-center gap-4" key={data.name}>
      <Image
        src={data.image}
        alt=""
        width={36}
        height={36}
        className="w-9 h-9 rounded-lg m-0 shadow-sm"
      />
      <div>
        <p className="m-0 flex items-center gap-2">
          <Link href={data.link}>{data.name}</Link>
          {repo.data.stargazers_count ? (
            <span className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
              <StarIcon className="w-3 h-3" />
              {repo.data.stargazers_count}
            </span>
          ) : null}
        </p>
        <p className="m-0 text-neutral-600 dark:text-neutral-400 text-xs">
          {data.description}
        </p>
      </div>
    </div>
  );
};

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
      <Project data={project} key={project.name} />
    ))}
  </Section>
);
