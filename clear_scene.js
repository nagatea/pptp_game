class Clear{
    constructor(){

    }

    step(){
        if (grid.x > 470 && grid.x < 570 && grid.y > 285 && grid.y < 325 && mouseManager.isJustPressed('left') || keyManager.isJustPressed('t')){
            location.assign("https://twitter.com/intent/tweet?text=%23pptp_game%20で" + score.getScore() + "点を獲得しました！(正解数:" + (round.getRound()-1) + ")%0a&url=http://pptp_game.nagatech.trap.show");
        }
        if (grid.x > 470 && grid.x < 570 && grid.y > 335 && grid.y < 375 && mouseManager.isJustPressed('left') || keyManager.isJustPressed('r')){
            ready = new Ready(3);
            game = new Game();
            clear = new Clear();
            scene = SCENE.Ready;
        }
    }

    draw(){
        drawImage("clear", 0, 0, 600, 400);
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "30px 'Agency'";
        context.textAlign = "left";
        context.fillText("スコア : " + score.getScore(), 40, 315);
        context.fillText("正解数 : " + (round.getRound() - 1), 40, 365);

        context.font = "20px 'Agency'";
        context.textAlign = "center";
        if (grid.x > 470 && grid.x < 570 && grid.y > 285 && grid.y < 325){
            context.strokeStyle = "red";
        }else{
            context.strokeStyle = "black";
        }
        context.strokeRect(470, 285, 100, 40);
        context.fillText("Tweet(T)", 520, 315);
        if (grid.x > 470 && grid.x < 570 && grid.y > 335 && grid.y < 375){
            context.strokeStyle = "red";
        }else{
            context.strokeStyle = "black";
        }
        context.strokeRect(470, 335, 100, 40);
        context.fillText("Retry(R)", 520, 365);
    }
}