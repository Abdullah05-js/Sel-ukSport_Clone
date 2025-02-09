/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['thodex.live'],
        remotePatterns: [{
          protocol: 'https',
          hostname: 'www.goal.com',
          port: '',
          pathname: '/api/image/**'
        }]
      },
      
};

export default nextConfig;
