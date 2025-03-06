/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['thodex.live',"1xbet.com","semedia.filgoal.com","media3.giphy.com"],
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
