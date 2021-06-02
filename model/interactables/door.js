class Door extends Interactable {
    constructor (x, y, open, locked) {
        super(x, y, 1, 1, new Spritesheet(doorSheet));
        this.open = open || false;
        this.locked = locked || false; //key works as a requirement to open (if defined)
    }

    interact(tilemap) {
        if (!this.locked) {
            //if open - close
            if (this.open) {
                this.open = false;
                //play sound
                playSound("assets/audio/door_close.mp3", 1);
                tilemap.addObstacle(this.x, this.y, this.width, this.height);
            }
            else {
                this.open = true;
                //play sound
                playSound("assets/audio/door_open.mp3", 1);
                tilemap.removeObstacle(this.x, this.y, this.width, this.height);
            }
        }
    }

    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;

        if (this.open)
            ctx.drawImage(this.spritesheet.image, 16, 0, 16, 16, xDrawPosition-tileWidth/2, yDrawPosition, tileWidth, tileHeight);
        else
            ctx.drawImage(this.spritesheet.image, 0, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
    }
}