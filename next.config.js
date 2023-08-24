/** @type {import('next').NextConfig} */
require('dotenv').config();
const webpack = require('webpack');
const nextTranslate = require('next-translate-plugin');

const nextConfig = nextTranslate({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'fr', 'it'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: `sandbox-shop.lyotechlabs.com`,
    //     defaultLocale: 'en',
    //   },
    // ],
  },

  async redirects() {
    return [
      {
        source: '/checkout/payment/success/cc/:orderId',
        destination: '/checkout/payment/success?invoiceNumber=:orderId',
        permanent: false,
      },
      {
        source: '/product/lfi-smartphone',
        destination: '/co-products',
        permanent: false,
      },
    ];
  },
});

module.exports = nextConfig;
