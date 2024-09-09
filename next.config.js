module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/services/custom-web-cms',
          destination: '/services/custom-cms-development-services',
          permanent: true,
        },
      ];
    },
  };
  