import {
  AvatarIcon,
  CalendarIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  GlobeIcon,
  HomeIcon,
  ListBulletIcon,
  Pencil2Icon,
  ReaderIcon,
  TokensIcon,
} from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Link } from './link';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { ActiveProvider } from './active-provider';
import type { FC } from 'react';

const pages = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Work', href: '/work', icon: ListBulletIcon },
  { name: 'Blog', href: '/blog', icon: Pencil2Icon },
  { name: 'Stack', href: '/stack', icon: ReaderIcon },
  { name: 'Mailing List', href: '/mailing-list', icon: EnvelopeClosedIcon },
  { name: 'Clients', href: '/clients', icon: AvatarIcon },
  { name: 'Apps', href: '/apps', icon: TokensIcon },
  { name: 'Speaking', href: '/speaking', icon: CalendarIcon },
  { name: 'Features', href: '/features', icon: GlobeIcon },
  { name: 'Contact', href: '/contact', icon: ChatBubbleIcon },
];

export const Navigation: FC = () => (
  <div className="bg-white/90 px-2 z-50 backdrop-blur-sm border border-neutral-200 shadow fixed left-1/2 -translate-x-1/2 bottom-8 rounded-full">
    <div className="flex items-center gap-2 p-2">
      {pages.map(({ name, href, icon: Icon }) => (
        <Tooltip key={name} delayDuration={0}>
          <TooltipTrigger asChild>
            <ActiveProvider href={href} className="p-2 relative rounded-full">
              <Link href={href}>
                <Icon
                  className={cn(
                    'w-4 h-4 transition-colors',
                    'text-neutral-600 hover:text-neutral-900',
                    'dark:text-neutral-400 dark:hover:text-white',
                    'group-[.active-page]:text-neutral-900',
                    'dark:group-[.active-page]:dark:text-white'
                  )}
                />
              </Link>
            </ActiveProvider>
          </TooltipTrigger>
          <TooltipContent>
            <span className="text-sm">{name}</span>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  </div>
);
