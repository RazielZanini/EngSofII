/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/conversion-service/:path*',
          destination: 'http://localhost:8100/conversion-service/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  