import { Link } from '@/components/link';
import { Section } from '@/components/section';
import type { FC } from 'react';

type WorkProps = {
  role: string;
  company: string;
  link: string;
  caption?: {
    text: string;
    link?: string;
  };
  startYear: number;
  endYear?: number;
};

const work: WorkProps[] = [
  {
    role: 'Chief Product Officer',
    company: 'Corellium',
    link: '/work/corellium',
    startYear: 2021,
  },
  {
    role: 'Advisor',
    company: 'Raw Studio',
    link: 'https://raw.studio/',
    startYear: 2023,
  },
  {
    role: 'Director',
    company: 'Jellypepper',
    link: '/work/jellypepper',
    caption: {
      text: 'acquired by Raw Studio',
      link: 'https://raw.studio/blog/raw-studio-acquires-jellypepper-to-expand-its-reach-to-the-startup-ecosystem/',
    },
    startYear: 2017,
    endYear: 2023,
  },
  {
    role: 'Senior User Experience Designer',
    company: 'R/GA',
    link: 'https://rga.com/',
    startYear: 2020,
    endYear: 2021,
  },
  {
    role: 'Head of Product and Design',
    company: 'Spaceship',
    link: '/work/spaceship',
    startYear: 2016,
    endYear: 2017,
  },
  {
    role: 'Product Design Intern',
    company: 'Palantir',
    link: 'https://www.palantir.com/',
    startYear: 2015,
  },
];

export const Work: FC = () => (
  <Section
    title="Work"
    footer={
      <>
        Read more on <Link href="https://read.cv/haydenbleasel">read.cv</Link>
      </>
    }
  >
    {work.map((job) => (
      <div className="flex items-center justify-between gap-4" key={job.role}>
        <p className="m-0">
          <Link href={job.link}>
            {job.role}, {job.company}
          </Link>
          {job.caption ? (
            <span className="ml-1 text-sm text-neutral-600">
              {job.caption.link ? (
                <Link className="text-inherit" href={job.caption.link}>
                  ({job.caption.text})
                </Link>
              ) : (
                `(${job.caption.text})`
              )}
            </span>
          ) : null}
        </p>
        <p className="m-0 text-neutral-600 text-xs">
          {job.startYear} &mdash; {job.endYear ?? 'Present'}
        </p>
      </div>
    ))}
  </Section>
);
