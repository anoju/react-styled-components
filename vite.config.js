import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true, // 컴포넌트 이름 표시
              fileName: true, // 파일 경로 및 줄 번호 표시
            },
          ],
        ],
      },
    }),
  ],
});
