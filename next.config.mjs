/** @type {import('next').NextConfig} */

import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // 여기에 GitHub Pages 저장소 이름을 입력하세요.
  assetPrefix: '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
