import Image from 'next/image';
import Link from 'next/link';
import { MailingList } from '@/components/mailing';
import type { FC } from 'react';

const Hero: FC = () => (
  <section className="flex flex-col gap-8">
    <Image
      width={32}
      height={32}
      src="/avatar.jpg"
      alt="Hayden Bleasel"
      className="w-8 h-8 rounded-full object-cover m-0"
    />
    <div className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 font-medium text-sm">Hayden Bleasel</p>
      <p className="m-0 text-neutral-500 text-sm">
        Chief Product Officer at Corellium
      </p>
      <p className="m-0 text-neutral-500 text-sm">Delray Beach, FL</p>
    </div>
  </section>
);

const Intro: FC = () => (
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
    <MailingList />
  </section>
);

type WorkProps = {
  role: string;
  company: {
    name: string;
    link?: string;
  };
  caption?: {
    text: string;
    link?: string;
  };
  startYear: number;
  endYear?: number;
};

const work: WorkProps[] = [
  {
    role: 'Chief Product Officer',
    company: {
      name: 'Corellium',
      link: '/work/corellium',
    },
    startYear: 2021,
  },
  {
    role: 'Advisor',
    company: {
      name: 'Raw Studio',
    },
    startYear: 2023,
  },
  {
    role: 'Director',
    company: {
      name: 'Jellypepper',
      link: '/work/jellypepper',
    },
    caption: {
      text: 'acquired by Raw Studio',
      link: '#',
    },
    startYear: 2017,
    endYear: 2023,
  },
  {
    role: 'Senior User Experience Designer',
    company: {
      name: 'R/GA',
    },
    startYear: 2020,
    endYear: 2021,
  },
  {
    role: 'Head of Product and Design',
    company: {
      name: 'Spaceship',
      link: '/work/spaceship',
    },
    startYear: 2016,
    endYear: 2017,
  },
  {
    role: 'Product Design Intern',
    company: {
      name: 'Palantir',
    },
    startYear: 2015,
  },
];

const Work: FC = () => (
  <section className="flex flex-col gap-6">
    <h2 className="text-sm font-medium text-neutral-900 m-0">Work</h2>
    <div className="flex flex-col gap-2">
      {work.map((job) => (
        <div className="flex items-center justify-between gap-4" key={job.role}>
          <p className="m-0">
            {job.role},{' '}
            <span>
              {job.company.link ? (
                <Link href={job.company.link}>{job.company.name}</Link>
              ) : (
                job.company.name
              )}
            </span>
            {job.caption ? (
              <span className="ml-1 text-sm text-neutral-500">
                {job.caption.link ? (
                  <Link
                    href={job.caption.link}
                    className="text-inherit font-normal"
                  >
                    ({job.caption.text})
                  </Link>
                ) : (
                  `(${job.caption.text})`
                )}
              </span>
            ) : null}
          </p>
          <p className="m-0 text-neutral-500 text-xs">
            {job.startYear} &mdash; {job.endYear ?? 'Present'}
          </p>
        </div>
      ))}
    </div>
    <p className="text-sm text-neutral-500 m-0">
      Read more on{' '}
      <a
        href="https://read.cv/haydenbleasel"
        target="_blank"
        rel="noopener noreferrer"
      >
        read.cv
      </a>
    </p>
  </section>
);

const Home: FC = () => (
  <>
    <Hero />
    <Intro />
    <Work />
  </>
);

export default Home;
