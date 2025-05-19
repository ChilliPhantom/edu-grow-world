/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Netlify
  images: {
    unoptimized: true, // Required when using output: 'export'
  },
  // If you're using Next.js 13+ with the App Router
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig