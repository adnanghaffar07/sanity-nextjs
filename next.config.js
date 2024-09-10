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
        {
          source: '/services/headless-cms',
          destination: '/services/headless-cms-development-services',
          permanent: true,
        },
        {
          source: '/services/design-services',
          destination: '/services/ui-ux-design-services',
          permanent: true,
        },
        {
          source: '/services/ai-services',
          destination: '/services/ai-software-development-services',
          permanent: true,
        },
        {
          source: '/services/qa-web-testing',
          destination: '/services/qa-testing-services',
          permanent: true,
        },
        {
          source: '/services/mobile-app-development',
          destination: '/services/mobile-app-development-services',
          permanent: true,
        },
        {
          source: '/services/web-app-development',
          destination: '/services/custom-software-development-services',
          permanent: true,
        },
      ];
    },
  };
  