class Bucket extends ItemPickup {
    constructor(x, y) {
        super(Item.BUCKET, x, y, 1, 1, new Spritesheet(bucketSheet));
    }


    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x + tileWidth/4;
        const yDrawPosition = this.y*tileHeight-camera.y + tileHeight/4;

        ctx.drawImage(this.spritesheet.image, 0, 0, 32, 32, xDrawPosition, yDrawPosition, tileWidth/1.5, tileHeight/1.5);
    }
}