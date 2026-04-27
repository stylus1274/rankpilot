/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/blog/how-to-do-a-content-audit-in-90-minutes-using-ai-tools',
        destination: '/blog/content-audit-90-minutes-ai-tools',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
