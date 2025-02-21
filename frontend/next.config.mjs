/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['thodex.live'],
        remotePatterns: [{
          protocol: 'https',
          hostname: 'www.goal.com',
          port: '',
          pathname: '/api/image/**'
        },
        {
          protocol: 'https',
          hostname: '1xbet.com',
          port: '',
        }]
      },
      
};

export default nextConfig;
