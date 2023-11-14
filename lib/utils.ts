import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Blog, Work, Thoughts } from '@/.contentlayer/generated';
import type { Thing, WithContext } from 'schema-dts';
import type { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const toJsonLd = <T extends Thing>(
  json: WithContext<T>
): string => `<script type="application/ld+json">
${JSON.stringify(json, null, 2)}
</script>`;

export const isValidEmail = (email: string): boolean => /.+@.+/u.test(email);

export const formatDate = (date: string): string =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Africa/Lagos',
  }).format(new Date(date));

export const sortBlogPostByDate = (blogPostA: Blog, blogPostB: Blog): number =>
  new Date(blogPostB.date).getTime() > new Date(blogPostA.date).getTime()
    ? 1
    : -1;

export const sortThoughtsPostByDate = (
  thoughtPostA: Thoughts,
  thoughtPostB: Thoughts
): number =>
  new Date(thoughtPostB.date).getTime() > new Date(thoughtPostA.date).getTime()
    ? 1
    : -1;

// type Job = {
//   featured: boolean;
//   startYear: number;
//   endYear: number;
//   slug: string;
//   role: string;
//   company: string;
//   imageBlur: string;
//   image: string;
//   location: string;
//   // Include any other properties that are in your work data
// };

// export const sortByStartYear = (jobA: Job, jobB: Job): number => {
//   return jobB.startYear - jobA.startYear;
// };

export const sortByStartYear = (workA: Work, workB: Work): number => {
  if (!workA.endYear) {
    return -1;
  }

  if (!workB.endYear) {
    return 1;
  }

  return workB.endYear - workA.endYear;
};
