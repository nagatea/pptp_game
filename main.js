"use strict";

let time = 0;

var SCENE = {
    Title : 1,
    Ready : 2,
    Game : 3,
    Result : 4
};

let scene;
let ready;

const init = _ =>{
    loadImage("title", "draft/title.png");
    loadImage("ready", "draft/game1.png");
    scene = SCENE.Title;
    ready = new Ready(3);
    window.requestAnimationFrame(step);
}

const step = _ =>{
    time++;
    if(scene == SCENE.Title){
        if (getKeys().enter == true) scene = SCENE.Ready;
    }else if (scene == SCENE.Ready){
        ready.step();
        if (ready.isEnd()) scene = SCENE.Game;
    }
    draw();
    window.requestAnimationFrame(step);
}

const draw = _ =>{
    context.fillStyle = "black";
    context.clearRect(0, 0, 600, 400);
    if(scene == SCENE.Title){
        drawImage("title", 0, 0, 600, 400);
    }else if (scene == SCENE.Ready){
        drawImage("ready", 0, 0, 600, 400);
        ready.draw();
    }
}