module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Allow CORS for all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/services/custom-web-cms",
        destination: "/services/custom-cms-development-services",
        permanent: true,
      }, 
      {
        source: "/services/headless-cms",
        destination: "/services/headless-cms-development-services",
        permanent: true,
      },
      {
        source: "/services/design-services",
        destination: "/services/ui-ux-design-services",
        permanent: true,
      },
      {
        source: "/services/ai-services",
        destination: "/services/ai-software-development-services",
        permanent: true,
      },
      {
        source: "/services/qa-web-testing",
        destination: "/services/qa-testing-services",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development",
        destination: "/services/mobile-app-development-services",
        permanent: true,
      },
      {
        source: "/services/web-app-development",
        destination: "/services/custom-software-development-services",
        permanent: true,
      },
    ];
  },
};
