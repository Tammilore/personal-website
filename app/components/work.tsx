import Link from 'next/link';
import { Section } from '@/components/section';
import type { FC } from 'react';

type WorkProps = {
  role: string;
  company: {
    name: string;
    link?: string;
  };
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
    company: {
      name: 'Corellium',
      link: '/work/corellium',
    },
    startYear: 2021,
  },
  {
    role: 'Advisor',
    company: {
      name: 'Raw Studio',
    },
    startYear: 2023,
  },
  {
    role: 'Director',
    company: {
      name: 'Jellypepper',
      link: '/work/jellypepper',
    },
    caption: {
      text: 'acquired by Raw Studio',
      link: '#',
    },
    startYear: 2017,
    endYear: 2023,
  },
  {
    role: 'Senior User Experience Designer',
    company: {
      name: 'R/GA',
    },
    startYear: 2020,
    endYear: 2021,
  },
  {
    role: 'Head of Product and Design',
    company: {
      name: 'Spaceship',
      link: '/work/spaceship',
    },
    startYear: 2016,
    endYear: 2017,
  },
  {
    role: 'Product Design Intern',
    company: {
      name: 'Palantir',
    },
    startYear: 2015,
  },
];

export const Work: FC = () => (
  <Section
    title="Work"
    footer={
      <>
        Read more on{' '}
        <a
          href="https://read.cv/haydenbleasel"
          target="_blank"
          rel="noopener noreferrer"
        >
          read.cv
        </a>
      </>
    }
  >
    {work.map((job) => (
      <div className="flex items-center justify-between gap-4" key={job.role}>
        <p className="m-0">
          {job.role},{' '}
          <span>
            {job.company.link ? (
              <Link href={job.company.link}>{job.company.name}</Link>
            ) : (
              job.company.name
            )}
          </span>
          {job.caption ? (
            <span className="ml-1 text-sm text-neutral-500">
              {job.caption.link ? (
                <Link
                  href={job.caption.link}
                  className="text-inherit font-normal"
                >
                  ({job.caption.text})
                </Link>
              ) : (
                `(${job.caption.text})`
              )}
            </span>
          ) : null}
        </p>
        <p className="m-0 text-neutral-500 text-xs">
          {job.startYear} &mdash; {job.endYear ?? 'Present'}
        </p>
      </div>
    ))}
  </Section>
);
