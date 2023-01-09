class ObjectSpawner {
	constructor() {
		this.maxObjectsInScene = 10;
		this.fallingObjects = [];
		this.numActiveObjects = 0
		this.lastSpawnTime = 0;
		this.timeToSpawn = 2500;
	}

	// Spawn a new FallingObject
	spawn() {
		if (this.numActiveObjects < this.maxObjectsInScene) {
			console.log("spawn!");
			this.fallingObjects[this.numActiveObjects] = new FallingObject();
			this.numActiveObjects++;
		}
	}

	// Updates the active objects
	updateActiveObjects() {
		// console.log(this.fallingObjects);
		if (this.numActiveObjects === 0) {
			return;
		}
		for (let i = 0; i < this.numActiveObjects; i++) {
			let obj = this.fallingObjects[i];
			let objYPos
			try {
				objYPos = obj.update();
			} catch (error) {
				console.log("null value");
				continue;
			}

			if (objYPos > windowHeight - 20) {
				this.fallingObjects[i] = null;
				this.numActiveObjects--;
			}
		}
	}

	onFrameUpdate() {
		this.updateActiveObjects();

		// Speed up spawn rate every ~3000ms (range is to account for inconsistent frametime)
		if (millis() % 3000 >= 2984 &&
		millis() % 3000 <= 3016) {
			this.timeToSpawn -= 100;
		}
		if (this.timeToSpawn < 100) {
			this.timeToSpawn = 100;
		}

		// Decide if object should spawn and spawn if true
		if (millis() - this.lastSpawnTime >= this.timeToSpawn - 33 &&
		millis() - this.lastSpawnTime <= this.timeToSpawn + 33) {
			this.spawn();
			this.lastSpawnTime = millis();
		}
	}
}