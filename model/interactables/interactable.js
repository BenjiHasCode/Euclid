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
       /* const image = this.spritesheet.image;
        const sx = this.spriteInfo.x + 16/*spriteInfo.width, no? * this.spritesheet.currentFrame;
        const sy = this.spriteInfo.y;
        const sWidth = this.spriteInfo.width;
        const sHeight = this.spriteInfo.height;

        
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;

        //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.drawImage(image, sx, sy, sWidth, sHeight, xDrawPosition, yDrawPosition, tileWidth, tileHeight);*/
    }
}