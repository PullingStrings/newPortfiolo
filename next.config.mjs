/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 async headers() {
  return [
   {
    source: '/audio/(.*)',
    headers: [
     { key: 'Cache-Control', value: 'public, max-age=31536000, immutable'}
    ]
   }
  ]
 },
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'placehold.co',
    pathname: '/500x500/**',
    search: '',
   },
   {
    protocol: 'https',
    hostname: 'placehold.co',
    pathname: '/100x100/**',
    search: '',
   }
  ]
 }
};

export default nextConfig;
