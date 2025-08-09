import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // パフォーマンス最適化設定
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
  // GitHub Pagesのサブディレクトリで公開する場合は以下を追加
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name',
};

export default nextConfig;
