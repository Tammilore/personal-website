'use client';

import { ThemeProvider } from 'next-themes';
import type { FC, ReactNode } from 'react';

type NextThemeProviderProps = {
  readonly children: ReactNode;
};

export const NextThemeProvider: FC<NextThemeProviderProps> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
