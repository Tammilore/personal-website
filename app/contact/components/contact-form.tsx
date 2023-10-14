'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
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
import type { FC } from 'react';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm: FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    /*
     * Do something with the form values.
     * ✅ This will be type-safe and validated.
     */
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  required
                  className="bg-white"
                  placeholder="Jane Smith"
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
                  className="bg-white"
                  placeholder="janesmith@acme.com"
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
                  className="bg-white"
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
