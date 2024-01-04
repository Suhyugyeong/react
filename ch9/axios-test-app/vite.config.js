import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //proxy 서버 설정
  server: {
    proxy: {
      api: {
        //앱에서 요청 url에 api(임의의 단어)가 있으면
        target: "http://localhost:8000", //이 프록시 서버로 요청을 대행해주겠다는 뜻
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), //url의 api 단어를 제거
        //설정 파일이 변경되었으니 서버를 다시 구동해야 반영이 됨
      },
    },
  },
});
