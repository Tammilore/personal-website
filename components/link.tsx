import NextLink from 'next/link';
import type { ComponentProps, FC } from 'react';

type LinkProps = {
  readonly href: string;
  readonly children: ComponentProps<'a'>['children'];
  readonly className?: string;
};

export const Link: FC<LinkProps> = ({ href, ...props }) => {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    );
  }

  return <NextLink href={href} {...props} />;
};
