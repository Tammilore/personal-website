import { Link } from '@/components/link';
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
      {allBlogs
        .sort(sortBlogPostByDate)
        .slice(0, 5)
        .map((post) => (
          <div
            className="flex items-center gap-4 justify-between"
            key={post.slug}
          >
            <a
              href={`https://www.beskar.co/${post.slug}`}
              className="m-0 text-neutral-900 text-sm truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.title}
            </a>
            <p className="w-[7rem] m-0 text-neutral-600 text-xs text-right">
              {formatDate(post.date)}
            </p>
          </div>
        ))}
    </div>
  </Section>
);
