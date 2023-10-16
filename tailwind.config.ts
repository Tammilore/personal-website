import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/contentlayer-datapad/**/*.js',
  ],
  theme: {
    extend: {
      typography: (theme: (key: string) => string) => ({
        sm: {
          css: {
            'p > code': {
              color: theme('colors.neutral.900'),
              backgroundColor: theme('colors.neutral.200'),
              padding: theme('spacing.1'),
              borderRadius: theme('borderRadius.DEFAULT'),
              '&::before, &::after': {
                display: 'none',
              },
            },
            'pre[data-theme="default"]': {
              padding: theme('spacing.3'),
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontSize: theme('fontSize.sm'),
              backgroundColor: theme('colors.neutral.900'),
              margin: 0,
            },
          },
        },
        invert: {
          css: {
            'p > code': {
              color: theme('colors.white'),
              backgroundColor: theme('colors.neutral.900'),
            },
            pre: {
              backgroundColor: theme('colors.neutral.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
