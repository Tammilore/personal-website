import Link from 'next/link';
import { allBlogs } from '@/.contentlayer/generated';
import { createMetadata } from '@/lib/metadata';
import { formatDate, sortBlogPostByDate } from '@/lib/utils';
import type { FC } from 'react';

const title = 'Blog';
const description = 'Thoughts, ideas, and opinions.';

export const metadata = createMetadata({ title, description, path: '/blog' });

const Blog: FC = () => (
  <main className="relative prose-h2:m-0 prose-p:m-0">
    <h1>{title}</h1>
    <p>{description}</p>
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
  </main>
);

export default Blog;
