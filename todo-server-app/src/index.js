import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import routes from "./routes";

const app = express();

//cross domain 문제 해결.. 아래처럼 cors모듈을 등록하는 것만으로 response header 조정
//크로스 도메인 이슈를 해결하는 방법 중 하나는 서버 측에서 CORS(Cross-Origin Resource Sharing) 헤더를 설정하는 것입니다. 이를 통해 특정 도메인에서의 요청이나 자원 접근을 허용할 수 있습니다.
//또는 프록시를 사용하여 같은 도메인으로 보이도록 데이터를 전달할 수도 있습니다.
// app.use(cors());

app.use(function (req, res, next) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

//-- 로깅
var baseDir = path.resolve(".");

app.set("port", process.env.PORT || 8000);

app.use(express.static(baseDir + "/public"));
app.set("views", baseDir + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

routes(app);

const server = app.listen(app.get("port"), function () {
  console.log(
    "할일 목록 서비스가 " + app.get("port") + "번 포트에서 시작되었습니다!"
  );
});
