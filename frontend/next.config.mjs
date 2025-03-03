/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['thodex.live'],
        remotePatterns: [{
          protocol: 'https',
          hostname: 'semedia.filgoal.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: '1xbet.com',
          port: '',
        }]
      },
      
};

export default nextConfig;
