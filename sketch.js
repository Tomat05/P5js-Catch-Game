let player;
let scene = 0;
let menu;
let level = 1;
let difficulty = (level * 0.1) + 0.9;
let totalLevels = 5;
let caught = 0;
let missed = 0;
let badCaught = 0;
let deathReason = "";
let scores = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
  
  	menu = new startMenu();
	endScreen = new endMenu();
	player = new Player();
  
  	spawner = new ObjectSpawner();
	spawner.setup();

	for (let i = 0; i < scores.length ; i++){
		scores[i]=0;
	}
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
	if (keyCode === TAB && scene == 2){
		endScreen.reset();
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
		case 2:
			endScreen.display();
			break;
    	default:
    		break;
  	}

	if (missed >= 5 || badCaught >= 3) {
		scene = 2;
	}

	push();
	textSize(30);
	textAlign("right", "top");
	text("Caught: " + caught + "\nMissed: " + missed + "\nBad: " + badCaught + "\nLevel: " + level, windowWidth - 30, 20);
	pop();

}

function mousePressed(){
	if (scene == 0 && menu.doesGameStart()){
	  	scene = 1;
	}
}