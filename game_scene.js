var data;
let element;
let nowNumber;
let choiced;
let nowData;
let nextData;
let isHukidashi1;
let isHukidashi2;
let isJudge;
let isSuccess;
let isFailed;
let text;
let len;
let textSize;
let tmpNum = 0;
let popuko;
let round;
let score;
let kawaii;
let moumita;

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
        this.isJudge = false;
        this.kawaii = false;
        this.moumita = false;
        this.isSuccess = false;
        this.isFailed = false;
        this.text = "";
        this.len = 0;
        this.textSize = "0px";
        this.time = 0;
        popuko = new Popuko();
        round = new Round();
        score = new Score();
    }

    choice(){
        this.nowNumber = Math.floor(Math.random()*this.element);
        this.nextData = data[this.nowNumber];
    }

    judge(){
        if (this.time == 0){
            this.isHukidashi1 = false;
            if(this.kawaii){
                popuko.changeState(STATE.Kawaii);
                if(!this.nowData.isAppear){
                    this.isSuccess = true;
                    this.nowData.isAppear = true;
                    this.nowData.round = round.getRound();
                }else{
                    this.isFailed = true;
                }
            }
            if(this.moumita){
                popuko.changeState(STATE.Moumita);
                if(this.nowData.isAppear){
                    this.isSuccess = true;
                }else{
                    this.isFailed = true;
                }
            }

        }
        this.time++;
        if (this.time > 60){
            this.time = 0;
            if(this.kawaii){
                this.kawaii = false;
            }
            if(this.moumita){
                this.moumita = false;
            }
            this.isSuccess = false;
            this.isHukidashi1 = true;
            this.choiced = false;
            popuko.changeState(STATE.Normal);
        }
    }

    step(){
        //if (keyManager.isJustPressed('enter')) this.choiced = false;
        if (!this.isFailed){
            if (!this.choiced){
                this.choiced = true;
                tmpNum++;
                console.log(tmpNum);
                round.countUp();
                this.isHukidashi1 = true;
                this.nowData = this.nextData;
                this.choice();
            }
            if (keyManager.isJustPressed('up')) this.kawaii = true;
            if (keyManager.isJustPressed('down')) this.moumita = true;
            if (this.kawaii || this.moumita){
                this.judge();
            } 
        }else{

        } 
    }

    draw(){
        popuko.draw();
        round.draw();
        score.draw();
        drawImage(this.nowData.key, 395, 30, 200, 235);
        if (this.isSuccess) drawImage("success", 395, 40, 200, 200);
        if (this.isFailed) drawImage("failed", 395, 40, 200, 200);
        if (!this.isFailed){
            if (this.isHukidashi1) {
                drawImage("hukidashi1", 60, 300, 325, 100);
                this.text = this.nowData.name + "だ～！";
                this.len = this.text.length;
                context.globalAlpha = 1.0;
                context.fillStyle = "black";
                this.textSize = Math.floor(250/this.len) + "px";
                context.font = this.textSize + " 'Agency'";
                context.textAlign = "center";
                context.fillText(this.text, 250, 380 - this.len*2);
            }
        }else{
            drawImage("hukidashi1", 60, 300, 325, 100);
            this.text = "残念～" + this.nowData.name + "は" + this.nowData.round + "回目に出てきました～";
            this.len = this.text.length;
            context.globalAlpha = 1.0;
            context.fillStyle = "black";
            this.textSize = Math.floor(250/this.len) + "px";
            context.font = this.textSize + " 'Agency'";
            context.textAlign = "center";
            context.fillText(this.text, 250, 380 - this.len*2);
        }
        if (this.isHukidashi2) drawImage("hukidashi2", 360, 260, 240, 140);
    }

}