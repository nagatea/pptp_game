class Title{
    constructor(){
        this.text = "Press ENTER or Click";
    }

    step(){
        if (keyManager.isJustPressed('enter')) scene = SCENE.Ready;
    }

    draw(){
        drawImage("title", 0, 0, 600, 400);
        context.fillStyle = "#734B94";
        context.fillRect(100,325,400,50);
        context.strokeStyle = "black";
        context.strokeRect(100,325,400,50);
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "30px 'Agency'";
        context.textAlign = "center";
        context.fillText(this.text, 300, 360);
    }
}