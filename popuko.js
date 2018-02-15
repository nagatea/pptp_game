let STATE = {
    Normal : 1,
    Kawaii : 2,
    Moumita : 3
};
let state;

class Popuko{
    constructor(){
        this.state = STATE.Normal;
    }

    step(){

    }

    changeState(state){
        this.state = state;
    }

    draw(){
        switch (this.state) {
            case 1:
                drawImage("popuko1", 130, 170, 240, 240);
                break;
            case 2:
                drawImage("popuko2", 110, 140, 270, 270);
                break;
            case 3:
                drawImage("popuko3", 130, 150, 250, 250);
                break;
        
            default:
                drawImage("popuko1", 130, 170, 240, 240);
                break;
        }
    }
}