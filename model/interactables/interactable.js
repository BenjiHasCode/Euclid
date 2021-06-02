class Interactable extends Entity{
    constructor(x, y, width, height, spritesheet) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.spritesheet = spritesheet;
    }

    interact() {
    }

    render(ctx, camera) {
    }
}