import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pagesのサブディレクトリで公開する場合は以下を追加
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name',
};

export default nextConfig;
