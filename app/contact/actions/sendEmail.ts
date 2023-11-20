'use server';

import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate as template } from '@/emails/contact';
import { parseError } from '@/lib/error';
import type { FormValues } from '../components/contact-form';
import type { ReactElement } from 'react';

if (!process.env.RESEND_TOKEN) {
  throw new Error('RESEND_TOKEN environment variable is not set');
}

const resend = new Resend(process.env.RESEND_TOKEN);

export const sendEmail = async ({
  name,
  email,
  message,
}: FormValues): Promise<{
  error?: string;
}> => {
  const avatar = `https://www.gravatar.com/avatar/${Buffer.from(email).toString(
    'hex'
  )}?s=100&d=mp`;

  const react = template({
    avatar,
    name,
    message,
  }) as ReactElement;
  const text = render(react, { plainText: true });

  try {
    await resend.emails.send({
      from: 'noreply@tamilore.co',
      to: 'tammilore@gmail.com',
      subject: 'Contact form submission',
      reply_to: email,
      react,
      text,
    });

    return {};
  } catch (error) {
    const errorMessage = parseError(error);

    return { error: errorMessage };
  }
};
