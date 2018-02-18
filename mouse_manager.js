let mousePre = {};
let mouseNow = {};
let mouseNext = {};

class MouseManager{
    constructor(){
        this.mousePre = {};
        this.mouseNow = {};
        this.mouseNext = {};
    }

    update(){
        this.mousePre = Object.assign({}, this.mouseNow);
        this.mouseNow = Object.assign({}, this.mouseNext);
        this.mouseNext = Object.assign({}, getMouse());
    }

    isPressed(key){
        return this.mouseNow[key];
    }

    isJustPressed(key){
        return !this.mousePre[key] && this.mouseNow[key];
    }

    isJustReleased(key){
        return this.mousePre[key] && !this.mouseNow[key];
    }

    getNowMouse(){
        return this.mouseNow;
    }
}