/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['newatlantic.biz'],
  },
}

module.exports = nextConfig
