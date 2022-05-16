"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("button");


loginBtn.addEventListener('click', login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // json형태로 데이터를 전달한다는 것을 명시
        },
        body: JSON.stringify(req),    
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/" // 로그인에 성공할 시 루트 디렉터리로 감
        } else{
            alert(res.msg);
        }
    }).catch((err) => {
        console.error("로그인중 에러 발생");
    })
    // res.json의 반환 값은 promise다
}