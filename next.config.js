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
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.codeautomation.ai",
          },
        ],
        destination: "https://codeautomation.ai/:path*",
        permanent: true,
      },
       {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "codeautomation.dev",
        },
      ],
      destination: "https://codeautomation.ai/:path*",
      permanent: true,
    },

      {
        source: "/services/custom-web-cms",
        destination: "/services/custom-cms-development-services",
        permanent: true,
      },
       {
        source: "/services/gohighlevel-crm-automation-customization.",
        destination: "/services/gohighlevel-crm-automation-customization",
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
        source: "/services/web-scraping/playright",
        destination: "/services/qa-testing-services/playwright-testing",
        permanent: true,
      },
      {
        source: "/case-studies/termsandconditions",
        destination: "/termsandconditions",
        permanent: true,
      },
      {
        source: "/case-studies/termsandconditions\\",
        destination: "/termsandconditions",
        permanent: true,
      },
      {
        source: "/case-studies/termsandconditions%5C",
        destination: "/termsandconditions",
        permanent: true,
      },
      {
        source: "/services/zoho-services-ai-automation",
        destination: "/services/zoho-automation-services",
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
      // {
      //   source: "/services/headless-cms-development-services/storyblock-headless",
      //   destination: "/services/headless-cms-development-services/storyblock-headless",
      //   permanent: true,
      // },

      // 🆕 AI service duplicate
      // {
      //   source: "/services/ai-software-development-services/rag-chatbot-services",
      //   destination: "/services/ai-services/rag-chatbot-services",
      //   permanent: true,
      // },

      // Add these inside your existing async redirects() { return [ ... ]; } array in next.config.js

      // 🔐 Authentication & Support
      {
        source: '/forgot_password',
        destination: '/', // or your actual auth page
        permanent: true,
      },

      // 🏠 Home & Top-Level Pages
      {
        source: '/Home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/Software',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/Other',
        destination: '/services',
        permanent: true,
      },

      // 📚 Blog & Article Redirects
      {
        source: '/a-brief-guide-on-cross-browser-and-parallel-testing',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/mobile-security-and-vulnerability-tools',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/which-programming-language-is-best-for-selenium-web-driver-browser-automation',
        destination: '/blogs',
        permanent: true,
      },

      // 🛠️ Technology & General Expertise
      {
        source: '/rapid-application-development',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/technologies/reactjs-development',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/algolia',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/fingerprint-security',
        destination: '/services',
        permanent: true,
      },

      // 💳 Specific Sub-Services (Pattern-based example)
      // You can redirect groups of similar paths using a pattern
      {
        source: '/sub-services/:path*',
        destination: '/services',
        permanent: true,
      },
      // If the above generic rule doesn't work, add specific ones like:
      {
        source: '/sub-services/automation-testing',
        destination: '/services',
        permanent: true,
      },

      // 💰 Billing & Plans
      {
        source: '/month',
        destination: '/about/service-summary', // Page discussing billing cycles
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
