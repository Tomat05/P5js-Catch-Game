let player;
let inGame = False;
let inMenu = True;



function mousePressed(){
  if (inMenu = True){
    inGame = doesGameStart();
    if (inGame = True){
      inMenu = False;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player();
  menu = new startMenu();
}

function draw() {
  background(220);
  if (inGame = True){
    player.update();
  }else if (inMenu = True){
   menu.display();
   
 }
}
