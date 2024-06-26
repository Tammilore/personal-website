import merge from 'lodash.merge';
import type { Metadata } from 'next';

type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
};

const applicationName = 'Tamilore Lawal';
const author: Metadata['authors'] = {
  name: applicationName,
  url: 'https://tamilore.co/',
};
const publisher = applicationName;
const twitterHandle = '@blacqee_';

export const createMetadata = ({
  title,
  description,
  path,
  image,
  keywords,
  ...props
}: MetadataGenerator): Metadata => {
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    throw new Error('NEXT_PUBLIC_SITE_URL is not defined');
  }

  const parsedTitle = `${title} | ${applicationName}`;

  const metadata: Metadata = merge(
    {
      title: parsedTitle,
      description,
      applicationName,
      authors: [author],
      creator: author.name,
      metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
      formatDetection: {
        telephone: false,
      },
      appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: parsedTitle,
      },
      openGraph: {
        title: parsedTitle,
        description,
        type: 'website',
        siteName: applicationName,
        locale: 'en_US',
        url: new URL(path ?? '/', process.env.NEXT_PUBLIC_SITE_URL).toString(),
      },
      publisher,
      keywords,
      twitter: {
        card: 'summary_large_image',
        creator: twitterHandle,
      },
      viewport: {
        minimumScale: 1,
        initialScale: 1,
        width: 'device-width',
        viewportFit: 'cover',
      },
    },
    props
  );

  if (image && metadata.openGraph) {
    metadata.openGraph.images = [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ];
  }

  return metadata;
};
