let player;
let inGame = false;
let inMenu = true;
let menu;

function setup() {
	createCanvas(windowWidth, windowHeight);
  
  menu = new startMenu();

	player = new Player();
  
  spawner = new ObjectSpawner();
	spawner.setup();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  player.updatePlayerPos();
}

function draw() {
  background(220);
  if (inGame){
    player.onFrameUpdate();
    spawner.onFrameUpdate();
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