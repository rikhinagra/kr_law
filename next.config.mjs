/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'kathyrabii.com',
          },
        ],
        destination: 'https://www.krinjurylawfirm.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'kathyrabii.com',
          },
        ],
        destination: 'https://www.krinjurylawfirm.com/:path*',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.kathyrabii.com',
          },
        ],
        destination: 'https://www.krinjurylawfirm.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kathyrabii.com',
          },
        ],
        destination: 'https://www.krinjurylawfirm.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
