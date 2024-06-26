import Image from 'next/image';
import { Link } from '@/components/link';
import { allWorks } from '@contentlayer/generated';
import work from '../../data/work.json';
import { createMetadata } from '@/lib/metadata';
import { sortByStartYear } from '@/lib/utils';
import type { FC } from 'react';

const title = 'Work';
const description = 'My previous and current roles.';

export const metadata = createMetadata({ title, description, path: '/work' });

const Work: FC = () => (
  <>
    <section className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 dark:text-white font-medium text-sm">
        {title}
      </p>
      <p className="m-0 text-neutral-600 dark:text-neutral-400 text-sm">
        {description}
      </p>
    </section>
    <div className="flex flex-col gap-2">
      {allWorks.sort(sortByStartYear).map((job) => (
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
          key={job.company}
        >
          <div className="flex items-center gap-4">
            <Image
              src={job.image}
              alt=""
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg m-0 shadow-sm"
              blurDataURL={`data:image/svg;base64,${job.imageBlur}`}
            />
            <div>
              <p className="m-0">
                <Link href={job.slug}>{job.role}</Link>
              </p>
              <p className="m-0 text-neutral-600 dark:text-neutral-400 text-xs">
                {job.company}
              </p>
            </div>
          </div>
          <p className="m-0 text-neutral-600 dark:text-neutral-400 text-xs ml-[52px] sm:ml-0">
            {job.startYear} &mdash; {job.endYear ?? 'Present'}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default Work;
