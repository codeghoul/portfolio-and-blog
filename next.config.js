/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      'images.ctfassets.net',
      'media.graphcms.com',
      'media.graphassets.com',
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
