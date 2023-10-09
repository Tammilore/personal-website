import Link from 'next/link';
import { allBlogs } from '@contentlayer/generated';
import { Section } from '@/components/section';
import { formatDate, sortBlogPostByDate } from '@/lib/utils';
import type { FC } from 'react';

export const Blog: FC = () => (
  <Section
    title="Thoughts"
    footer={
      <>
        Keep reading on <Link href="/blog">the blog</Link>.
      </>
    }
  >
    <div className="flex flex-col gap-2">
      {allBlogs.sort(sortBlogPostByDate).map((post) => (
        <Link
          href={post.slug}
          className="flex items-center gap-4 justify-between no-underline font-normal"
          key={post.slug}
        >
          <p className="m-0 text-neutral-900 text-sm truncate">{post.title}</p>
          <p className="w-[7rem] m-0 text-neutral-500 text-xs text-right">
            {formatDate(post.date)}
          </p>
        </Link>
      ))}
    </div>
  </Section>
);
