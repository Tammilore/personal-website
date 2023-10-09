import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const Home: FC = () => (
  <>
    <section className="flex flex-col gap-8">
      <Image
        width={32}
        height={32}
        src="/avatar.jpg"
        alt="Hayden Bleasel"
        className="w-8 h-8 rounded-full object-cover m-0"
      />
      <div className="flex flex-col gap-1">
        <p className="m-0 text-neutral-900 font-medium text-sm">
          Hayden Bleasel
        </p>
        <p className="m-0 text-neutral-500 text-sm">
          Chief Product Officer at Corellium
        </p>
        <p className="m-0 text-neutral-500 text-sm">Delray Beach, FL</p>
      </div>
    </section>
    <section>
      <p>Hi, I&apos;m Hayden Bleasel.</p>
      <p>
        I&apos;m the CPO at <Link href="/work/corellium">Corellium</Link> — a
        virtual hardware platform for government agencies and large enterprises
        to perform security research, penetration testing and development on
        mobile and IoT devices. I run the product management, customer support
        and design teams.
      </p>
      <p>
        Previously I ran an agency called{' '}
        <Link href="/work/jellypepper">Jellypepper</Link>. We worked with
        startups in self-driving car tech, AI, biotech, crypto, drone delivery,
        cybersecurity and even orbital (outer space) logistics.
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
    </section>
  </>
);

export default Home;
