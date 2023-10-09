import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Thing, WithContext } from 'schema-dts';
import type { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const toJsonLd = <T extends Thing>(
  json: WithContext<T>
): string => `<script type="application/ld+json">
${JSON.stringify(json, null, 2)}
</script>`;

export const isValidEmail = (email: string): boolean => /.+@.+/u.test(email);
