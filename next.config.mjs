/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {
            protocol: "http",
            hostname: "**",
          },
        ],
      },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
                use: {
                    loader: '@svgr/webpack',
                    options: {
                        prettier: false,
                        svgo: false,
                    },
                },
            },
        );

        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
};

export default nextConfig;
