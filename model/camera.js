class Camera extends Entity {
    constructor(x, y, target) {
        this.x = x;
        this.y = y;
        //the target is what the camera centers on
        this.target = target;
    }

    update() {
        this.x = this.target.x;
        this.y = this.target.y;
    }
}