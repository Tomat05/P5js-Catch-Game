let player;
let scene = 1;
let menu;
let difficulty = 1.5;


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

	switch (scene) {
    	case 0:
      		menu.display();
			break;

		case 1:
			spawner.onFrameUpdate();
			player.onFrameUpdate();
    	default:
    		break;
  	}
}

function mousePressed(){
	if (scene == 0 && menu.doesGameStart()){
	  	scene = 1;
	}
}