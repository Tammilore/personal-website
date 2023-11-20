'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { parseError } from '@/lib/error';
import { useToast } from '@/components/ui/use-toast';
import { sendEmail } from '../actions/sendEmail';
import type { FC } from 'react';

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export type FormValues = z.infer<typeof formSchema>;

export const ContactForm: FC = () => {
  const [sending, setSending] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (sending) {
      return;
    }

    setSending(true);

    try {
      const { error } = await sendEmail(values);

      if (error) {
        throw new Error(error);
      }

      toast({ description: 'Message sent!' });
      form.reset();
    } catch (error) {
      const message = parseError(error);

      toast({ description: message, variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  required
                  className="bg-white dark:bg-neutral-900"
                  placeholder="Jon Snow"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your full name, first and last.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  required
                  className="bg-white dark:bg-neutral-900"
                  placeholder="jon@snow.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your email address so I can get back to you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  required
                  className="bg-white dark:bg-neutral-900"
                  placeholder="Hello, I'd like to talk about..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your message here. Please be as detailed as possible.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={sending} className="w-full sm:w-fit">
          {sending ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </Form>
  );
};
