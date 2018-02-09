"use strict";

let time = 0;

const init = _ =>{
    loadImage("title", "draft/title.png");
    window.requestAnimationFrame(step);
}

const step = _ =>{
    time++;
    draw();
    window.requestAnimationFrame(step);
}

const draw = _ =>{
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, 1000, 675);
    drawImage("title", 0, 0, 1000, 625);
}