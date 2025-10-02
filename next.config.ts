import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // ✅ ADD THIS: Tells Next.js to generate static HTML files
  output: 'export',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // ✅ ADD THIS: Required for static export (disables Next.js image optimization)
    unoptimized: true,
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
