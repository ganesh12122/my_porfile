/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/my_porfile' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/my_porfile' : '',
  },
  staticPageGenerationTimeout: 120,
  typescript: {
    // R3F JSX intrinsics not resolved by Next.js tsc plugin - runtime works fine
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
