import type { NextConfig } from "next";



module.exports = {
    devIndicators: {
      buildActivity: false,  
      autoPrerender: false,  
      appIsrStatus: false,   
    },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**/public/images/**',
      },
    ],
  },
};

