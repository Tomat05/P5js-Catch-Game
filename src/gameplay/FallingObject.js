class FallingObject {
    constructor() {
        this.position = createVector(100, 100);
        this.velocity = 0;

        this.objType = 0;

        this.active = false;

        this.sprite;
    }

    setActive(setType, image) {
        this.position = createVector(random(100, windowWidth - 100), 100);
        this.objType = setType;
        this.sprite = image;
        this.active = true;
    }

    reset() {
        this.active = false;
        this.velocity = 0;
        this.position = createVector(100, 100);
    }
    
    draw() {
        push();
        noStroke();
        this.objType === 0 ? fill(0, 255, 0) : fill(255, 0, 0);
        circle(this.position.x, this.position.y, 75);
        this.sprite.resize(125, 125)
        image(this.sprite, this.position.x - 62.5, this.position.y - 62.5);
        pop();
    }

    updatePosition() {
        this.velocity -= (9.81 * difficulty) * (deltaTime / 1000);
        this.position.set(this.position.x, this.position.y - this.velocity);
    }

    update() {
        if (!this.active) {
            return;
        }
        this.updatePosition();
        if (this.position.y >= windowHeight + 40) {
            if (this.objType === 0) {
                missed++;
            }
            return true;
        }

        if (this.position.x > mouseX - 37.5 && this.position.x < mouseX + 37.5
        && this.position.y >= windowHeight - 125 && this.position.y <= windowHeight - 75) {
            this.objType === 0 ? caught++ : badCaught++;
            return true;
        }

        this.draw();
    }
}