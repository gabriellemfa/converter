const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/converter/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/converter' : '',
  output: 'export'
};

export default nextConfig;