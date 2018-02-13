var data;
let element;
let nowNumber;
let choiced;
let nowData;
let nextData;
let isHukidashi1;
let text;
let len;
let textSize;
let tmpNum = 0;

class Game{
    constructor(){
        data = [
            { name : "パンダ", src : "res/panda.png", isAppear : false , round : 0},
            { name : "コアラ", src : "res/koara.png", isAppear : false , round : 0},
            { name : "タスマニアタイガー", src : "res/koara.png", isAppear : false , round : 0}
        ];
        this.element = data.length;
        this.nowNumber = 0;
        this.nowData = data[0];
        this.nextData = data[1];
        this.choiced = true;
        this.isHukidashi1 = true;
        this.text = "";
        this.len = 0;
        this.textSize = "0px";
    }

    choice(){
        this.nowNumber = Math.floor(Math.random()*this.element);
        this.nextData = data[this.nowNumber];
    }

    step(){
        if (getKeys().enter == true) this.choiced = false;
        if (!this.choiced){
            this.choiced = true;
            tmpNum++;
            console.log(tmpNum);
            this.nowData = this.nextData;
            this.choice();
        }      
    }

    draw(){
        if (this.isHukidashi1) drawImage("hukidashi1", 60, 300, 325, 100);
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