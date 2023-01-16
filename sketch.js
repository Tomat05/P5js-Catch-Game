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

function draw() {
  background(0);
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