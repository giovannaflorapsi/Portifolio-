/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portifolio-',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  agentRules: false,
}

export default nextConfig
