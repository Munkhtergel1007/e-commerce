/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["cdn.shopify.com", "cdnp.cody.mn"],
  },
  nextConfig,
};
