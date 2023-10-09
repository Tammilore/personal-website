import { createSecureHeaders } from 'next-secure-headers';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { createContentlayerPlugin } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: true,
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          // HSTS Preload: https://hstspreload.org/
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true, preload: true },
          ],
        }),
      },
    ];
  },

  // Silence, contentlayer
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };

    return config;
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer()(nextConfig)
  : withContentlayer(nextConfig);
