/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
        source:"/request/:path(\\d[2])",
      destination:"/request/:path(\\d[1])",
      permanent:true,
    }
    ]
  }
}

module.exports = nextConfig
