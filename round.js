let count;
class Round{
    constructor(){
        this.count = 1;
        this.text = "";
    }

    step(){
    }

    countUp(){
        this.count++;
    }

    getRound(){
        return this.count;
    }

    draw(){
        this.text = "ROUND : " + this.count;
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "20px 'Agency'";
        context.textAlign = "left";
        context.fillText(this.text, 5, 20);
    }
}