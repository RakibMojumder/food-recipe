/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "res.cloudinary.com",
                port: ''
            },
        ]
    },
    target: 'server',
    optimizeFonts: false,
}

module.exports = nextConfig
