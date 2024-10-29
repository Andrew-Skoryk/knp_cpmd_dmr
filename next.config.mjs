/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-iev1-1.xx.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
