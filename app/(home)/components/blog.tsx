import { Link } from '@/components/link';
import { allBlogs } from '@contentlayer/generated';
import { Section } from '@/components/section';
import { formatDate, sortBlogPostByDate } from '@/lib/utils';
import type { FC } from 'react';

export const Blog: FC = () => (
  <Section
    title="Blog"
    footer={
      <>
        Keep reading on <Link href="/blog">the blog</Link>.
      </>
    }
  >
    <div className="flex flex-col gap-2">
      {allBlogs
        .sort(sortBlogPostByDate)
        .slice(0, 5)
        .map((post) => (
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 justify-between"
            key={post.slug}
          >
            <Link
              href={post.slug}
              className="m-0 text-neutral-900 dark:text-white text-sm sm:truncate"
            >
              {post.title}
            </Link>
            <p className="w-[7rem] m-0 text-neutral-600 dark:text-neutral-400 text-xs sm:text-right">
              {formatDate(post.date)}
            </p>
          </div>
        ))}
    </div>
  </Section>
);
