import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//Vite(React용 빠른 개발 환경을 제공하는 도구) 설정 파일

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //Vite 플러그인 중 하나로 @vitejs/plugin-react를 사용하여 React를 지원하도록 설정하고 있습니다.
  //proxy 서버 설정
  server: {
    proxy: {
      api: {
        //앱에서 요청 url에 api(임의의 단어)가 있으면
        target: "http://localhost:8000", //이 프록시 서버로 요청을 대행해주겠다는 뜻, 프록시로 전달할 대상 서버 주소를 지정합니다.
        changeOrigin: true, //대상 서버로의 요청 시에 Origin 헤더를 변경하여, 실제 서버에 요청하는 것처럼 보이도록 설정합니다.
        rewrite: (path) => path.replace(/^\/api/, ""),
        // 요청 경로를 변경하는 함수를 지정합니다. 여기서는 "/api"로 시작하는 경로를 제거하고 실제 서버에 전달합니다.
        //url의 api 단어를 제거
        //설정 파일이 변경되었으니 서버를 다시 구동해야 반영이 됨
      },
    },
  },
});

//changeOrigin: true 옵션은 프록시된 요청의 Origin 헤더를 대상 서버의 주소로 변경하는 역할을 합니다.
//일반적으로, 웹 브라우저에서는 보안상의 이유로 다른 도메인으로의 AJAX 요청에 대해 Same-Origin Policy를 적용하고 있습니다. 이 때문에 동일한 도메인으로의 요청은 문제 없이 이루어집니다만, 다른 도메인으로의 요청은 브라우저에서 차단됩니다.
//changeOrigin: true를 설정하면, 프록시 서버는 클라이언트의 요청 Origin 헤더를 제거하고, 대신 대상 서버의 주소로 설정하여 보내게 됩니다. 이렇게 함으로써, 브라우저는 프록시된 요청을 동일한 도메인으로 온 것으로 간주하고, Same-Origin Policy를 적용하지 않아도 됩니다.

//크로스도메인 이슈를 회피하기 위한 것
