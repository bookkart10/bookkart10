/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        hostname:"loremflickr.com"
      },
      {
        hostname:"static.vecteezy.com"
      },
      {
        hostname:"cloudflare-ipfs.com"
      },
      {
        hostname:"localhost"
      },{
        hostname:"qsewlleybhfgrufchhpk.supabase.co"
      }
    ]
  }
}

module.exports = nextConfig
