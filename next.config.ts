/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pebby-uplods.s3.us-east-1.amazonaws.com', // your API images
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // default fallback image
      },
    ],
  },
};

module.exports = nextConfig;
