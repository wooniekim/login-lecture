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
}