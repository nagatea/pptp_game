let data;
let element;
let nowNumber;
let choiced;
let nowData;
let nextData;
let isHukidashi1;
let isHukidashi2;
let isJudge;
let isSuccess;
let isGameOver;
let isJudging;
let failedType;
let text;
let text2;
let len;
let textSize;
let tmpNum = 0;
let popuko;
let round;
let score;
let kawaii;
let moumita;
let timer;
let check;

class Game{
    constructor(){
        data = [
            { name : "パンダ", key : "panda", isAppear : false , round : 0},
            { name : "コアラ", key : "koara", isAppear : false , round : 0},
            { name : "タスマニアタイガー", key : "tasmaniatiger", isAppear : false , round : 0},
            { name : "カンガルー", key : "kangaru", isAppear : false , round : 0},
            { name : "カモノハシ", key : "kamonohasi", isAppear : false , round : 0},
            { name : "ウォンバット", key : "wonbat", isAppear : false , round : 0},
            { name : "ワライカワセミ", key : "waraikawasemi", isAppear : false , round : 0},
            { name : "タスマニアデビル", key : "tasmaniadevil", isAppear : false , round : 0},
            { name : "ハリモグラ", key : "harimogura", isAppear : false , round : 0},
            { name : "ディンゴ", key : "dingo", isAppear : false , round : 0},
            { name : "ワラビー", key : "warabi", isAppear : false , round : 0},
            { name : "エミュー", key : "emyu", isAppear : false , round : 0},
            { name : "イリエワニ", key : "iriewani", isAppear : false , round : 0},
            { name : "マーレーコッド", key : "marekoddo", isAppear : false , round : 0},
            { name : "シードラゴン", key : "seadragon", isAppear : false , round : 0},
            { name : "カクレクマノミ", key : "kakurekumanomi", isAppear : false , round : 0},
            { name : "ヒクイドリ", key : "hikuidori", isAppear : false , round : 0},
            { name : "コカトゥー", key : "kokato", isAppear : false , round : 0},
            { name : "ボールパイソン", key : "python", isAppear : false , round : 0},
            { name : "タイマイ", key : "taimai", isAppear : false , round : 0},
            { name : "フクロネコ", key : "hukuroneko", isAppear : false , round : 0},
            { name : "クォッカ", key : "kuokka", isAppear : false , round : 0},
            { name : "ポッサム", key : "possamu", isAppear : false , round : 0},
            { name : "フクロアリクイ", key : "hukuroarikui", isAppear : false , round : 0},
            { name : "ミツスイ", key : "mitusui", isAppear : false , round : 0},
            { name : "コトドリ", key : "kotodori", isAppear : false , round : 0},
            { name : "フエガラス", key : "huegarasu", isAppear : false , round : 0},
            { name : "ゴアナ", key : "goana", isAppear : false , round : 0},
            { name : "フェアリーペンギン", key : "fairypengin", isAppear : false , round : 0},
            { name : "バンディクート", key : "bandelikuto", isAppear : false , round : 0}
        ];
        this.element = data.length;
        this.nowNumber = 0;
        this.nowData = data[0];
        this.nextData = data[1];
        this.choiced = true;
        this.isHukidashi1 = true;
        this.isHukidashi2 = true;
        this.isJudge = false;
        this.isJudging = false;
        this.kawaii = false;
        this.moumita = false;
        this.isSuccess = false;
        this.isGameOver = false;
        this.failedType = false;
        this.text = "";
        this.text2 = "";
        this.len = 0;
        this.textSize = "0px";
        this.time = 0;
        this.timer = 420;
        this.check = false;
        popuko = new Popuko();
        round = new Round();
        score = new Score();
    }

    choice(){
        this.nowNumber = Math.floor(Math.random()*this.element);
        this.nextData = data[this.nowNumber];
    }

    dataCheck(){
        for(let i=0;i<this.element;i++){
            if (!data[i].isAppear){
                return false;
            }
        }
        return true;
    }

    judge(){
        if (this.time == 0){
            this.isJudge = true;
            this.isHukidashi1 = false;
            if(this.kawaii){
                popuko.changeState(STATE.Kawaii);
                if(!this.nowData.isAppear){
                    this.isSuccess = true;
                    this.nowData.isAppear = true;
                    this.nowData.round = round.getRound();
                    this.check = this.dataCheck();
                    if (this.check) this.isGameOver = true;
                }else{
                    this.failedType = false;
                    this.isGameOver = true;
                }
            }
            if(this.moumita){
                popuko.changeState(STATE.Moumita);
                if(this.nowData.isAppear){
                    this.isSuccess = true;
                    this.nowData.round = round.getRound();
                }else{
                    this.failedType = true;
                    this.isGameOver = true;
                }
            }

        }
        this.time++;
        if (this.time == 30) this.isJudging = true;
        if(this.isSuccess && this.time >= 30) score.addScore(Math.floor(100 * round.getRound() * (this.timer / 100) / 60))
        if (this.time > 90){
            this.time = 0;
            if(this.kawaii){
                this.kawaii = false;
            }
            if(this.moumita){
                this.moumita = false;
            }
            this.isSuccess = false;
            this.isHukidashi1 = true;
            this.isJudge = false;
            this.isJudging = false;
            this.timer = 420;
            this.choiced = false;
            popuko.changeState(STATE.Normal);
        }
    }

    step(){
        //if (keyManager.isJustPressed('enter')) this.choiced = false;
        if (!this.isGameOver){
            if (!this.choiced){
                this.choiced = true;
                round.countUp();
                this.isHukidashi1 = true;
                this.nowData = this.nextData;
                this.choice();
            }
            if(this.timer > 0 && !this.isJudge){
                this.timer--;
                //console.log(this.timer);
            }
            if (keyManager.isJustPressed('up')) this.kawaii = true;
            if (keyManager.isJustPressed('down')) this.moumita = true;
            if (grid.x > 410 && grid.x < 575 && grid.y > 280 && grid.y < 325 && mouseManager.isJustPressed('left')) this.kawaii = true;
            if (grid.x > 410 && grid.x < 575 && grid.y > 340 && grid.y < 385 && mouseManager.isJustPressed('left')) this.moumita = true;
            if (this.kawaii || this.moumita){
                this.judge();
            } 
        }else{
            if (this.time <= 330) this.time++;
            if (this.time == 90) this.isJudging = true;
            if (this.check && this.isJudging){
                if (this.time < 270) score.addScore(Math.floor(5000000000000000 / 180))
                if (this.time == 330) scene = SCENE.Clear;
            }else{
                if (this.time == 330) scene = SCENE.Over;
            }
        } 
    }

    draw(){
        drawImage("game", 0, 0, 600, 400);
        popuko.draw();
        round.draw();
        score.draw();
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "20px 'Agency'";
        context.textAlign = "left";
        context.fillText("Time:" + (this.timer/60).toFixed(3), 200, 20);
        drawImage(this.nowData.key, 395, 30, 200, 235);
        if (this.isHukidashi2) drawImage("hukidashi2", 360, 260, 240, 140);

        if (this.isJudge){
            context.fillStyle = "#D0D0D0";
        }else{
            context.fillStyle = "#FFFFFF";
        }
        context.fillRect(410,280,165,45);
        if (grid.x > 410 && grid.x < 575 && grid.y > 280 && grid.y < 325 || this.kawaii){
            context.strokeStyle = "red";
        }else{
            context.strokeStyle = "black";
        }
        context.strokeRect(410,280,165,45);
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "30px 'Agency'";
        context.textAlign = "center";
        context.fillText("かわいい！", 495, 315);
        if (this.isJudge){
            context.fillStyle = "#D0D0D0";
        }else{
            context.fillStyle = "#FFFFFF";
        }
        context.fillRect(410,340,165,45);
        if (grid.x > 410 && grid.x < 575 && grid.y > 340 && grid.y < 385 || this.moumita){
            context.strokeStyle = "red";
        }else{
            context.strokeStyle = "black";
        }
        context.strokeRect(410,340,165,45);
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "30px 'Agency'";
        context.textAlign = "center";
        context.fillText("もう見た", 495, 373);

        if ((this.isSuccess || this.check) && this.isJudging) drawImage("success", 395, 40, 200, 200);
        if (this.isGameOver && !this.check && this.isJudging) drawImage("failed", 395, 40, 200, 200);
        if (!this.isGameOver){
            if (this.isHukidashi1) {
                drawImage("hukidashi1", 60, 300, 325, 100);
                this.text = this.nowData.name + "だ～！";
                this.len = this.text.length;
                context.globalAlpha = 1.0;
                context.fillStyle = "black";
                this.textSize = Math.floor(250/this.len) + "px";
                context.font = this.textSize + " 'Agency'";
                context.textAlign = "left";
                context.fillText(this.text, 115, 380 - this.len*2);
            }
        }else{
            if (this.isJudging){
                if (this.check){
                    this.text = "クリア～！";
                    this.text2 = "おめでとう！！！";
                }else{
                    if (this.failedType){
                        this.text = "残念～" + this.nowData.name + "は";
                        this.text2 = "まだ出てきてませ～ん";
                    }else{
                        drawImage("hukidashi1", 60, 300, 325, 100);
                        this.text = "残念～" + this.nowData.name + "は";
                        this.text2 = this.nowData.round + "回目に出てきました～";
                    }
                }
                drawImage("hukidashi1", 60, 300, 325, 100);
                this.len = Math.max(this.text.length, this.text2.length);
                context.globalAlpha = 1.0;
                context.fillStyle = "black";
                this.textSize = Math.floor(250/this.len) + "px";
                context.font = this.textSize + " 'Agency'";
                context.textAlign = "left";
                context.fillText(this.text, 115, 365 - this.len*2);
                context.fillText(this.text2, 115, 400 - this.len*2);
            }
        }
    }

}