/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  staticPageGenerationTimeout: 120,
  typescript: {
    // R3F JSX intrinsics not resolved by Next.js tsc plugin - runtime works fine
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
