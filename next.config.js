/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
  swcMinify: false, // Disable SWC minification
  webpack: (config, { isServer }) => {
    // Optimize webpack config for browser environment
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
