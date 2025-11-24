import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // 커스텀 도메인 루트(kimkiyun.com)에 붙일 때는 "/" 유지
});