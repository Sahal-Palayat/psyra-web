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
  async redirects() {
  return [
    {
      source: "/concerns/work-related-issues",
      destination: "/concerns/work-related-challenges",
      permanent: true,
    },
  ];
}
};



module.exports = nextConfig;
