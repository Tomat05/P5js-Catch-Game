let player;
let scene = 1;
let menu;
let difficulty = 1;

let caught = 0;
let missed = 0;


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
			break;
    	default:
    		break;
  	}

	if (missed >= 5) {
		scene = 3;
	}

	push();
	textSize(30);
	textAlign("right", "top");
	text("Caught: " + caught + "\nMissed: " + missed, windowWidth - 30, 20);
	pop();
}

function mousePressed(){
	if (scene == 0 && menu.doesGameStart()){
	  	scene = 1;
	}
}