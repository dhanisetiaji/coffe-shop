/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'divedigital.id',
    ],
  },
}

module.exports = nextConfig
