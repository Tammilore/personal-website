import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import {
  computeFields,
  remarkPlugins,
  rehypePlugins,
} from 'contentlayer-datapad';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    preview: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    keywords: {
      type: 'string',
      required: false,
    },
  },
  computedFields: computeFields<'Blog'>({}),
}));

export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: `work/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    role: {
      type: 'string',
      required: true,
    },
    company: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    startYear: {
      type: 'number',
      required: true,
    },
    endYear: {
      type: 'number',
      required: false,
    },
    location: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'string',
      required: false,
    },
  },
  computedFields: computeFields<'Work'>({}),
}));

export const App = defineDocumentType(() => ({
  name: 'App',
  filePathPattern: `app/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
  computedFields: computeFields<'App'>({}),
}));

export const Code = defineDocumentType(() => ({
  name: 'Code',
  filePathPattern: `code/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
  computedFields: computeFields<'Code'>({}),
}));

export const Thoughts = defineDocumentType(() => ({
  name: 'Thoughts',
  filePathPattern: `thoughts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
  computedFields: computeFields<'Thoughts'>({}),
}));

export const Eggs = defineDocumentType(() => ({
  name: 'Eggs',
  filePathPattern: `crazy-eggs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
  computedFields: computeFields<'Eggs'>({}),
}));

const source = makeSource({
  contentDirPath: './content',
  documentTypes: [Blog, Work, App, Thoughts, Eggs, Code],
  mdx: {
    remarkPlugins: remarkPlugins(),
    rehypePlugins: rehypePlugins({
      theme: 'one-dark-pro',
    }),
  },
});

export default source;
