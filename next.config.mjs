/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
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
