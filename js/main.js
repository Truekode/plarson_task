"use strict"

function beforeAfterLoaded() {
    document.addEventListener("readystatechange", () => {
        if (document.readyState === "interactive") {
            console.log("before");
            document.addEventListener("DOMContentLoaded", () => {
                console.log("after");
            });
        }
    })
}

beforeAfterLoaded();

document.addEventListener("DOMContentLoaded", () => {
    console.log("Dom загружен");
})