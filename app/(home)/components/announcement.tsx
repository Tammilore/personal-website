import { Link } from '@/components/link';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';

export type AnnouncementProps = {
  readonly text: string;
  readonly cta: string;
  readonly link: string;
};

export const Announcement: FC<AnnouncementProps> = ({ text, cta, link }) => (
  <div className="bg-neutral-50 flex flex-col items-start gap-4 border rounded-lg border-neutral-200 p-4">
    <p className="text-neutral-900 text-sm m-0">{text}</p>
    <Button asChild>
      <Link href={link} className="no-underline">
        {cta}
      </Link>
    </Button>
  </div>
);
