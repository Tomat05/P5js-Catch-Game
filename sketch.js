let player;
let inGame = false;
let inMenu = true;
let menu;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player();
  menu = new startMenu();
}

function draw() {
  background(220);
  if (inGame){
    player.update();
  }else if (inMenu){
    menu.display();
   
 }
}

function mousePressed(){
	if (inMenu){
	  inGame = menu.doesGameStart();
	  if (inGame){
		inMenu = false;
	  }
	}
}