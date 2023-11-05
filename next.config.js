/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ["www.datocms-assets.com"],
  },
};

module.exports = nextConfig;
