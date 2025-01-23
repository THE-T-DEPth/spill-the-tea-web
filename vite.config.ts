import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
        secure: false,
        ws: true,
      },
      // "/proxy": {
      //   target: "https://search.pstatic.net", // 검색 결과 이미지의 도메인
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/proxy/, ""), // "/image" 경로를 제거
      //   secure: false, // HTTPS 보안 연결 유지
      // },
    },
  },
});
