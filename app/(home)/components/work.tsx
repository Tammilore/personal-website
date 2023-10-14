import { allWorks } from '@/.contentlayer/generated';
import { Link } from '@/components/link';
import { Section } from '@/components/section';
import { sortByStartYear } from '@/lib/utils';
import type { FC } from 'react';

export const Work: FC = () => (
  <Section
    title="Work"
    footer={
      <>
        Browse more <Link href="/work">previous roles</Link>.
      </>
    }
  >
    {allWorks
      .filter((job) => job.featured)
      .sort(sortByStartYear)
      .map((job) => (
        <div
          className="flex items-center justify-between gap-4"
          key={job.company}
        >
          <p className="m-0">
            <Link href={job.slug}>
              {job.role}, {job.company}
            </Link>
          </p>
          <p className="m-0 text-neutral-600 dark:text-neutral-400 text-xs">
            {job.startYear} &mdash; {job.endYear ?? 'Present'}
          </p>
        </div>
      ))}
  </Section>
);
