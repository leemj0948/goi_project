/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
      source:"/request/:path(\\d[2])",
      destination:"/",
      permanent:true,
    },
    {
      source:"/request/:path(\\w[2])",
      destination:"/",
      permanent:true,
    },
    {
      source:"/request/:path(\\2)",
      destination:"/",
      permanent:true,
    },
    {
      source:"/request/:path(\\^2)",
      destination:"/",
      permanent:true,
    }
    ]

  }
}

module.exports = nextConfig
