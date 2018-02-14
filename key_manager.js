let keyPre= {};
let keyNow = {};
let keyNext = {};


class KeyManager{
    constructor(){
        this.keyPre = {};
        this.keyNow = {};
        this.keyNext = {};
    }

    update(){
        this.keyPre = Object.assign({}, this.keyNow);
        this.keyNow = Object.assign({}, this.keyNext);
        this.keyNext = Object.assign({}, getKeys());
    }

    isPressed(key){
        return this.keyNow[key];
    }

    isJustPressed(key){
        return !this.keyPre[key] && this.keyNow[key];
    }

    isJustReleased(key){
        return this.keyPre[key] && !this.keyNow[key];
    }
}