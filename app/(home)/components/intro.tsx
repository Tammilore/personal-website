import { Link } from '@/components/link';
import { MailingList } from '@/components/mailing';
import type { FC } from 'react';

export const Intro: FC = () => (
  <section>
    <p>Hi, I&apos;m Hayden Bleasel.</p>
    <p>
      I&apos;m the CPO at <Link href="/work/corellium">Corellium</Link> — a
      virtual hardware platform for government agencies and large enterprises to
      perform security research, penetration testing and development on mobile
      and IoT devices. I run the product management, customer support and design
      teams.
    </p>
    <p>
      Previously I ran an agency called{' '}
      <Link href="/work/jellypepper">Jellypepper</Link>. We worked with startups
      in self-driving car tech, AI, biotech, crypto, drone delivery,
      cybersecurity and even orbital (outer space) logistics. Jellypepper was{' '}
      <Link href="https://raw.studio/blog/raw-studio-acquires-jellypepper-to-expand-its-reach-to-the-startup-ecosystem/">
        acquired
      </Link>{' '}
      in 2023 by Raw Studio, where I joined them as an Advisor.
    </p>
    <p>
      I have limited availability and occasionally take on freelance projects
      and consulting. I&apos;m also open to joining boards and advisory roles.
      If you&apos;re interested, please get in touch.
    </p>
    <p>
      Also, I have a private mailing list where I keep 1000+ people up to date
      with what I&apos;m working on. Feel free to join if you&apos;re
      interested.
    </p>
    <MailingList />
  </section>
);
