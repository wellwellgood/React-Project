// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 💡 CJS 플러그인을 로드하기 위해 require 함수를 생성합니다.
import { createRequire } from 'module'; 
const require = createRequire(import.meta.url); 

export default defineConfig({
  plugins: [react()],
  base: "/", 
  
  // 💡 PostCSS 설정을 Vite config 안에 명시적으로 지정하여 로드 오류 방지
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // @csstools/postcss-oklab-function을 가장 먼저 로드하여 oklch를 처리하도록 합니다.
        require('@csstools/postcss-oklab-function')({
          preserve: true, 
        }),
      ],
    },
  },
});