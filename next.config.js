const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  images: {
    domains: [
      'images.ctfassets.net',
      'media.graphcms.com',
      'media.graphassets.com',
      'plus.unsplash.com',
      'cdn-images-1.medium.com',
      'dev-to-uploads.s3.amazonaws.com',
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/leaflet/dist/images',
            to: path.resolve(__dirname, 'public', 'leaflet', 'images'),
          },
        ],
      })
    )

    return config
  },
  reactStrictMode: true,
  swcMinify: true,
}
