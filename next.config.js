/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p-hold.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
