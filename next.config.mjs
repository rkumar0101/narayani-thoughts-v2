/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        // IMPORTANT: Replace this with your actual Render backend hostname
        // It should be just the domain, like 'narayani-backend.onrender.com'
        hostname: 'narayani-backend.onrender.com', 
      },
    ],
  },
};

export default nextConfig;