class startMenu{
    
    constructor(){
        this.rectSize = windowWidth/6;
    }

    display(){
        textSize(50);
        textAlign(CENTER);
        text("Catch Game!",windowWidth/2, 100);
        this.instructions();
        rect(((windowWidth/4) - (this.rectSize/2)), ((windowHeight/2)- (this.rectSize/4)), this.rectSize,this.rectSize/2); //the button
        textSize(30);
        text("Start Game",windowWidth/4,windowHeight/2+10);
    }
    
    
    
    
    doesGameStart(){
        let lowX = (windowWidth/4) - (this.rectSize/2);      //bounds of the button
        let hiX = (windowWidth/4) - (this.rectSize/2) + this.rectSize;
        let lowY = (windowHeight/2)- (this.rectSize/4);
        let hiY = (windowHeight/2)- (this.rectSize/4) + this.rectSize/2;
        if (((mouseX > lowX) && (mouseX < hiX)) && ((mouseY > lowY) && (mouseY < hiY))){     //supposed to check if mouse is within box
            return true;     //update if game is playing
        }
        return false;
    }

    instructions(){
        textSize(30);
        text ("Instruction ln 1",(windowWidth/4)*3,((windowHeight/2)-(windowHeight/8)));
        text ("Instruction ln 2",(windowWidth/4)*3,(windowHeight/2));
        text ("Instruction ln 3",(windowWidth/4)*3,((windowHeight/2)+(windowHeight/8)));
    }
}