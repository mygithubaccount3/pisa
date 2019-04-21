let bigYellowCircle = document.querySelector(".bigYellowCircle");
let bigYellowCircle2 = document.querySelector(".bigYellowCircle2");
let bigYellowCircle3 = document.querySelector(".bigYellowCircle3");
let bigYellowCircle4 = document.querySelector(".bigYellowCircle4");
let bigYellowCircle5 = document.querySelector(".bigYellowCircle5");
let bigYellowCircle6 = document.querySelector(".bigYellowCircle6");
let bigYellowCircle7 = document.querySelector(".bigYellowCircle7");
let bigYellowCircle8 = document.querySelector(".bigYellowCircle8");
let blueSquare = document.querySelector(".blueSquare");
let blueSquare2 = document.querySelector(".blueSquare2");
let blueSquare3 = document.querySelector(".blueSquare3");
let blueSquare4 = document.querySelector(".blueSquare4");
let blueSquare5 = document.querySelector(".blueSquare5");
let blueSquare6 = document.querySelector(".blueSquare6");
let blueSquare7 = document.querySelector(".blueSquare7");
let blueSquare8 = document.querySelector(".blueSquare8");
let greenSemicircle = document.querySelector(".greenSemicircle");
let greenSemicircle2 = document.querySelector(".greenSemicircle2");
let greenSemicircle3 = document.querySelector(".greenSemicircle3");
let greenSemicircle4 = document.querySelector(".greenSemicircle4");
let greenSemicircle5 = document.querySelector(".greenSemicircle5");
let greenSemicircle6 = document.querySelector(".greenSemicircle6");
let greenSemicircle7 = document.querySelector(".greenSemicircle7");
let greenSemicircle8 = document.querySelector(".greenSemicircle8");

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle);
    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle2);
    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle3);
    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle4);
    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle5);
    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle6);
    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle7);
    setTranslate(0, yScrollPosition * 0.1, bigYellowCircle8);
    setTranslate(0, yScrollPosition * 0.1, blueSquare);
    setTranslate(0, yScrollPosition * 0.1, blueSquare2);
    setTranslate(0, yScrollPosition * 0.1, blueSquare3);
    setTranslate(0, yScrollPosition * 0.1, blueSquare4);
    setTranslate(0, yScrollPosition * 0.1, blueSquare5);
    setTranslate(0, yScrollPosition * 0.1, blueSquare6);
    setTranslate(0, yScrollPosition * 0.1, blueSquare7);
    setTranslate(0, yScrollPosition * 0.1, blueSquare8);
    setTranslate(0, yScrollPosition * 0.1, greenSemicircle);
    setTranslate(0, yScrollPosition * 0.4, greenSemicircle2);
    setTranslate(0, yScrollPosition * 0.3, greenSemicircle3);
    setTranslate(0, yScrollPosition * 0.4, greenSemicircle4);
    setTranslate(0, yScrollPosition * 0.2, greenSemicircle5);
    setTranslate(0, yScrollPosition * 0.3, greenSemicircle6);
    setTranslate(0, yScrollPosition * 0.1, greenSemicircle7);
    setTranslate(0, yScrollPosition * 0.2, greenSemicircle8);

    requestAnimationFrame(scrollLoop);
}
