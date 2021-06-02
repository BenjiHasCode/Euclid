class Acid extends ItemPickup {
    //I want the constructor to be as simple as possible
    //so the "developer" can just say, "i want a vial of acid at 1,3" 
    //and not have to write all the extra stuff (w/h, spriteinfo and so on)
    constructor(x, y) {
        super(Item.ACID, x, y, 1, 1, new Spritesheet(potionSheet));
    }

    //returns id on interact so whatever interacts with it knows what it is
    interact() {
        d = new Dialogue("You Picked Up \n\nA " + getItemName(this.id), TextSpeed.FAST);
        gameState = GameState.DIALOGUE;
        //play acid pickup sound
        playSound("assets/audio/bottle.mp3", 1);
        return this.id;
    }

    render(ctx, camera) {
        //define where in the spritesheet the sprite is located
        const sx = 16*5;
        const sy = 0;
        const sSize = 16;   //the sprite is 16px wide and heigh

        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;

        ctx.drawImage(this.spritesheet.image, sx, sy, sSize, sSize, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
    }
}