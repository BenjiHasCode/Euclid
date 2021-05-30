const Item = {
    BUCKET: 0,
    ACID: 1,
    KEY: 2,

}


class Interactable extends Entity{
    constructor(x, y, width, height, prerequisite, reward, spritesheet) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.spritesheet = spritesheet;
        //since an interactable will most likely only show one image, 
        //Í think it's valuable to store the information of the sprite (sx, sy and such)
        this.spriteInfo = spriteInfo;
        this.prerequisite = prerequisite || null;
        this.prerequisiteMessage = prerequisiteMessage;
        this.reward = reward || null; //if reward != null - give something to player
    }

    interact(player) {
        gameState = GameState.DIALOGUE;

        //if there is a prerequisite (and player doesn't fulfill it) respond this
        if (this.prerequisite != null && !player.hasItem()) {
            //TODO
            d = new Dialogue("You obtained:\nAN ITEM!!!\nOMG", TextSpeed.FAST);

        }
        //else write generic message
        else {
            d = new Dialogue("You obtained:\nAN ITEM!!!\nOMG", TextSpeed.FAST);

        }
        d = new Dialogue("You obtained:\nAN ITEM!!!\nOMG", TextSpeed.FAST);

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