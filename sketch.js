let player;
let scene = 0;
let menu;
let level = 1;
let difficulty = (level * 0.1) + 0.9;
let totalLevels = 5;
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

function keyPressed() {
	if (keyCode === LEFT_ARROW || keyCode === DOWN_ARROW) {
	  if (level > 1){
		level--;
		difficulty = (level * 0.1) + 1;
	  }
	} else if (keyCode === RIGHT_ARROW || keyCode === UP_ARROW) {
	  if (level < 5){
		level++;
		difficulty = (level * 0.1) + 1;
	  }
	}
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
	text("Caught: " + caught + "\nMissed: " + missed + "\nLevel: " + level, windowWidth - 30, 20);
	pop();
}

function mousePressed(){
	if (scene == 0 && menu.doesGameStart()){
	  	scene = 1;
	}
}