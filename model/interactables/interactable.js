const Item = {
    BUCKET: 0,
    ACID: 1,
    KEY: 2,
    BOOKCASE: 3
}

function getItemName(itemID) {
    switch(itemID) {
        case 0:
            return "A Bucket";
        case 1:
            return "A vial of Acid";
        case 2:
            return "A Key";
        case 3:
            return "A Bookcase";
        default:
            //return "Placeholder";
            return "I have no idea what this is....";   //thought this was funnier than placeholder
    }
}


class Interactable extends Entity{
    constructor(id, x, y, width, height, spritesheet) {
        super(x, y);
        this.id = id;
        this.width = width;
        this.height = height;
        this.spritesheet = spritesheet;
    }

    interact() {
        //set gamestate to dialogue
        gameState = GameState.DIALOGUE;

        //set generic message
        d = new Dialogue("You See " + getItemName(this.id), TextSpeed.FAST);
    }

    render(ctx, camera) {
        const image = this.spritesheet.image;
        const sx = this.spriteInfo.x + 16/*spriteInfo.width, no?*/ * this.spritesheet.currentFrame;
        const sy = this.spriteInfo.y;
        const sWidth = this.spriteInfo.width;
        const sHeight = this.spriteInfo.height;

        
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;

        //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.drawImage(image, sx, sy, sWidth, sHeight, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
    }
}