class ObjectSpawner {
	constructor() {
		this.timeToNextSpawn = 1000;
		this.timeBetweenSpawns = 2500;

		this.maxObjectsInScene = 6;
		this.fallingObjectsPool = [];
		this.activeObjects = [];
	}

	setup() {
		for (let i = 0; i < this.maxObjectsInScene; i++) {
			this.fallingObjectsPool.push(new FallingObject());
		}
	}

	gameEnd() {
		for (let i = 0; i < this.activeObjects.length; i++) {

		}
	}

	spawn() {
		let obj = this.fallingObjectsPool.shift();
		let goodOrBad = Math.round(Math.random());
		obj.setActive(goodOrBad);
		this.activeObjects.push(obj);
	}

	despawn() {
		let obj = this.activeObjects.shift();
		obj.reset();
		this.fallingObjectsPool.push(obj);
		console.log(this.fallingObjectsPool.length);
	}

	updateActiveObjects() {
		for (let i = 0; i < this.activeObjects.length; i++) {
			if (this.activeObjects[i].update()) {
				this.despawn();
			}
		}
	}

	onFrameUpdate() {
		this.updateActiveObjects();

		this.timeToNextSpawn -= deltaTime;
		if (this.timeToNextSpawn <= 0 && this.activeObjects.length < this.maxObjectsInScene) {
			this.spawn();
			this.timeToNextSpawn = this.timeBetweenSpawns;
			if (this.timeBetweenSpawns <= 400) {
				this.timeBetweenSpawns = 400;
				return;
			}
			this.timeBetweenSpawns *= 0.99 / difficulty;
		}
	}
}