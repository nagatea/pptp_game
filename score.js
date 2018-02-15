class Score{
    constructor(){
        this.score = 0;
        this.text = "";
    }

    step(){

    }

    draw(){
        this.text = "SCORE : 0000000" + this.score;
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "20px 'Agency'";
        context.textAlign = "left";
        context.fillText(this.text, 400, 20);
    }
}