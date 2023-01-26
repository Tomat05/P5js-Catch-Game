class endMenu{
    
    constructor(){
    }

    display(){
        textAlign(CENTER);
        textSize(100);
        fill("red");
        text("You Lost",windowWidth/2,windowHeight/3);
        this.feedback();
        textSize(30);
        text("Press tab to return to the menu", windowWidth/2,(windowHeight/10)*7)
    }

    feedback(){
        if (missed == 5){
            textSize(30);
            text("You missed too many",windowWidth/2,(windowHeight/10)*6);
        }
    }

    reset(){
        if (caught > scores[level-1]){
            scores[level-1] = caught;
        }
        missed = 0;
        caught = 0;
        scene = 0;
    }
} 