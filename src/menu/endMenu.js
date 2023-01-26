class endMenu{
    
    constructor(){
    }

    display(){
        push();
        textAlign(CENTER);
        textSize(100);
        fill("red");
        text("You Lost",windowWidth/2,windowHeight/3);
        this.feedback();
        textSize(30);
        text("Press tab to return to the menu", windowWidth/2,(windowHeight/10)*7)
        pop();
    }

    feedback(){
        textSize(50);
        if (missed >= 5){
            text("You failed to catch " + missed + " objects", windowWidth/2, (windowHeight/10)*5);
        } else if (badCaught >= 3) {
            text("You caught " + badCaught + " bad objects", windowWidth/2, (windowHeight/10)*5);
        }
    }

    reset(){
        if (caught > scores[level-1]){
            scores[level-1] = caught;
        }
        missed = 0;
        caught = 0;
        badCaught = 0;
        scene = 0;
    }
} 