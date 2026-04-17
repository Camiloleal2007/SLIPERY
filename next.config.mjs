/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "s.alicdn.com",
      "photo.yupoo.com", 
    ],
  },
};

export default nextConfig;