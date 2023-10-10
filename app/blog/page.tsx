import { Link } from '@/components/link';
import { allBlogs } from '@/.contentlayer/generated';
import { createMetadata } from '@/lib/metadata';
import { formatDate, sortBlogPostByDate } from '@/lib/utils';
import { Section } from '@/components/section';
import type { FC } from 'react';

const title = 'Blog';
const description = 'Thoughts, ideas, and opinions.';

export const metadata = createMetadata({ title, description, path: '/blog' });

const blogPostsByYear = allBlogs.reduce<Record<number, typeof allBlogs>>(
  (acc, post) => {
    const year = new Date(post.date).getFullYear();
    return { ...acc, [year]: [...(acc[year] || []), post] };
  },
  {}
);

const Blog: FC = () => (
  <>
    <section className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 font-medium text-sm">{title}</p>
      <p className="m-0 text-neutral-500 text-sm">{description}</p>
    </section>
    <div className="flex flex-col gap-2">
      {Object.entries(blogPostsByYear)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <Section title={year} key={year}>
            {posts.sort(sortBlogPostByDate).map((post) => (
              <div
                className="flex items-center gap-4 justify-between"
                key={post.slug}
              >
                <Link
                  className="m-0 text-neutral-900 text-sm truncate"
                  href={post.slug}
                >
                  {post.title}
                </Link>
                <p className="w-[7rem] m-0 text-neutral-500 text-xs text-right">
                  {formatDate(post.date)}
                </p>
              </div>
            ))}
          </Section>
        ))}
    </div>
  </>
);

export default Blog;
