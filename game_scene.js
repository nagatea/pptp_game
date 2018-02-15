var data;
let element;
let nowNumber;
let choiced;
let nowData;
let nextData;
let isHukidashi1;
let isHukidashi2;
let text;
let len;
let textSize;
let tmpNum = 0;
let popuko;
let round;
let score;

class Game{
    constructor(){
        data = [
            { name : "パンダ", key : "panda", isAppear : false , round : 0},
            { name : "コアラ", key : "koara", isAppear : false , round : 0},
            { name : "タスマニアタイガー", key : "TasmaniaTiger", isAppear : false , round : 0}
        ];
        this.element = data.length;
        this.nowNumber = 0;
        this.nowData = data[0];
        this.nextData = data[1];
        this.choiced = true;
        this.isHukidashi1 = true;
        this.isHukidashi2 = true;
        this.text = "";
        this.len = 0;
        this.textSize = "0px";
        popuko = new Popuko();
        round = new Round();
        score = new Score();
    }

    choice(){
        this.nowNumber = Math.floor(Math.random()*this.element);
        this.nextData = data[this.nowNumber];
    }

    step(){
        if (keyManager.isJustPressed('enter')) this.choiced = false;
        if (!this.choiced){
            this.choiced = true;
            tmpNum++;
            console.log(tmpNum);
            round.countUp();
            this.nowData = this.nextData;
            this.choice();
        }      
    }

    draw(){
        popuko.draw();
        round.draw();
        score.draw();
        if (this.isHukidashi1) drawImage("hukidashi1", 60, 300, 325, 100);
        if (this.isHukidashi2) drawImage("hukidashi2", 360, 260, 240, 140);
        drawImage(this.nowData.key, 395, 30, 200, 235);
        this.text = this.nowData.name + "だ～！";
        this.len = this.text.length;
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        this.textSize = Math.floor(250/this.len) + "px";
        context.font = this.textSize + " 'Agency'";
        context.textAlign = "center";
        context.fillText(this.text, 250, 380 - this.len*2);
    }

}