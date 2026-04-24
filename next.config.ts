/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pebby-uplods.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', 
      },
    ],
  },
};

module.exports = nextConfig;
