class Book extends ItemPickup {
    constructor(x, y) {
        super(Item.BOOK, x, y, 1, 1, new Spritesheet(bookSheet))
    }

    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x + tileWidth/4;
        const yDrawPosition = this.y*tileHeight-camera.y + tileHeight/4;

        ctx.drawImage(this.spritesheet.image, 0, 0, bookSheet.width, bookSheet.height, xDrawPosition, yDrawPosition, tileWidth/1.5, tileHeight/1.5);
    }
}