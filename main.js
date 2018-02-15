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
let game;
let keyManager;

const init = _ =>{
    //scene = SCENE.Title;
    scene = SCENE.Game; //debug
    keyManager = new KeyManager();
    ready = new Ready(3);
    game = new Game();
    loadImage("title", "draft/title.png");
    loadImage("ready", "draft/game1.png");
    loadImage("game", "res/game.png");
    loadImage("hukidashi1", "res/hukidashi1.png");
    loadImage("hukidashi2", "res/hukidashi2.png");
    loadImage("popuko1", "res/popuko1.png");
    loadImage("popuko2", "res/popuko2.png");
    loadImage("popuko3", "res/popuko3.png");
    loadImage("success", "res/success.png");
    loadImage("failed", "res/failed.png");
    loadImages("res/animal");
    window.requestAnimationFrame(step);
}

const step = _ =>{
    time++;
    keyManager.update();
    if(scene == SCENE.Title){
        if (getKeys().enter == true) scene = SCENE.Ready;
    }else if (scene == SCENE.Ready){
        ready.step();
        if (ready.isEnd()) scene = SCENE.Game;
    }else if (scene == SCENE.Game){
        game.step();
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
    }else if (scene == SCENE.Game){
        drawImage("game", 0, 0, 600, 400);
        game.draw();
    }
}