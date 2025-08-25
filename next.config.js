const nextConfig = {
  swcMinify: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
    formats: ["image/avif", "image/webp"], // Better LCP
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://codeautomation.ai" }, // non-www preferred
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Existing redirects
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
        destination: "/services/mobile-app",
        permanent: true,
      },
      {
        source: "/services/web-app-development",
        destination: "/services/custom-software-development-services",
        permanent: true,
      },

      // 🆕 Fix duplicates & typos
      {
        source: "/services//:slug*",
        destination: "/services/:slug*",
        permanent: true,
      },
      {
        source: "/services/service/playright",
        destination: "/services/qa-testing-services/playwright-testing",
        permanent: true,
      },
      {
        source: "/services/service/tabidoo",
        destination: "/services/automation-integration/tabidoo",
        permanent: true,
      },
      {
        source: "/services/service/stripe-payment-services",
        destination: "/services/payment-platforms/stripe-payment-services",
        permanent: true,
      },

      // 🆕 CMS duplicates → canonical
      {
        source: "/services/headless-cms/sanity-headless",
        destination: "/services/headless-cms-development-services/sanity-headless",
        permanent: true,
      },
      {
        source: "/services/headless-cms/contentful-headless",
        destination: "/services/headless-cms-development-services/contentful-headless",
        permanent: true,
      },
      {
        source: "/services/headless-cms-development-services/storyblock-headless",
        destination: "/services/headless-cms-development-services/storyblock-headless",
        permanent: true,
      },

      // 🆕 AI service duplicate
      {
        source: "/services/ai-software-development-services/rag-chatbot-services",
        destination: "/services/ai-services/rag-chatbot-services",
        permanent: true,
      },

      // 🆕 Query junk cleanup (attachment_id, trk, ts)
      {
        source: "/",
        has: [{ type: "query", key: "attachment_id" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "trk" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "ts" }],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
