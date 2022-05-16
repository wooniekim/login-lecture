// MVC
"use strict";
// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require('./src/routes/home'); // routes의 home폴더 안에 있는 js파일을 읽어와줘!

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => { // 포트지정
    console.log("Server Start");
})

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드, "/"경로로 오면 home으로 이동

module.exports = app;