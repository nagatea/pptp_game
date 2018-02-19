
let nowTime;
let end;

class Ready{
    constructor(time){
        this.time = time;
        this.nowTime = 0;
        this.end = false;
    }

    step(){
        this.nowTime++;
        if (this.nowTime > 60){
            this.nowTime = 0;
            this.time--;
        }
        if (this.time == 0){
            this.end = true;
        }
    }

    draw(){
        drawImage("ready", 0, 0, 600, 400);
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "80px 'Agency'";
        context.textAlign = "center";
        context.fillText(this.time, canvas.width/2, canvas.height/2);
    }

    isEnd(){
        return this.end;
    }
}