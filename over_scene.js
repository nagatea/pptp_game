class Over{
    constructor(){

    }

    step(){
        if (grid.x > 25 && grid.x < 125 && grid.y > 270 && grid.y < 310 && mouseManager.isJustPressed('left') || keyManager.isJustPressed('t')){
            location.assign("https://twitter.com/intent/tweet?text=%23pptp_game%20で" + score.getScore() + "点を獲得しました！(正解数:" + (round.getRound()-1) + ")%0a&url=http://pptp_game.nagatech.trap.show");
        }
        if (grid.x > 25 && grid.x < 125 && grid.y > 330 && grid.y < 370 && mouseManager.isJustPressed('left') || keyManager.isJustPressed('r')){
            ready = new Ready(3);
            game = new Game();
            over = new Over();
            scene = SCENE.Ready;
        }
    }

    draw(){
        drawImage("over", 0, 0, 600, 400);
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "30px 'Agency'";
        context.textAlign = "center";
        context.fillText("スコア", 74, 100);
        context.fillText(score.getScore(), 74, 140);
        context.fillText("正解数", 74, 200);
        context.fillText(round.getRound() - 1, 74, 240);

        context.font = "20px 'Agency'";
        if (grid.x > 25 && grid.x < 125 && grid.y > 270 && grid.y < 310){
            context.strokeStyle = "red";
        }else{
            context.strokeStyle = "black";
        }
        context.strokeRect(25, 270, 100, 40);
        context.fillText("Tweet(T)", 74, 300);
        if (grid.x > 25 && grid.x < 125 && grid.y > 330 && grid.y < 370){
            context.strokeStyle = "red";
        }else{
            context.strokeStyle = "black";
        }
        context.strokeRect(25, 330, 100, 40);
        context.fillText("Retry(R)", 74, 360);
    }
}