// MVC
"use strict";
// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home'); // routes의 home폴더 안에 있는 js파일을 읽어와줘!

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드, "/"경로로 오면 home으로 이동

module.exports = app;