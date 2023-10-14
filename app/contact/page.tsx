import { createMetadata } from '@/lib/metadata';
import { ContactForm } from './components/contact-form';
import type { FC } from 'react';

const title = 'Contact';
const description =
  'Want to work together, or just want to say hi? Get in touch!';

export const metadata = createMetadata({
  title,
  description,
  path: '/contact',
});

const Contact: FC = () => (
  <>
    <section className="flex flex-col gap-1">
      <p className="m-0 text-neutral-900 dark:text-white font-medium text-sm">
        {title}
      </p>
      <p className="m-0 text-neutral-600 dark:text-neutral-400 text-sm">
        {description}
      </p>
    </section>
    <ContactForm />
  </>
);

export default Contact;
