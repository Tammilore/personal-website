'use client';

import { ThemeProvider } from 'next-themes';
import { ToastProvider } from './ui/toast';
import { TooltipProvider } from './ui/tooltip';
import type { FC, ReactNode } from 'react';

type ProvidersProps = {
  readonly children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <ToastProvider>
    <TooltipProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TooltipProvider>
  </ToastProvider>
);
