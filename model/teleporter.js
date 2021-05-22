class Teleporter extends Entity{
    constructor(x, y, width, height, teleportX, teleportY) {
        super(x, y);
        this.width = width;
        this.height = height;
        //teleportX, teleportY is where the player will be teleported to
        this.teleportX = teleportX;
        this.teleportY = teleportY;
    }

    update(player) {
        const pX = player.getX();
        const pY = player.getY();

        //check if colliding with player
        if (pX >= this.x && pX <= this.x+this.width-1 && pY >= this.y && pY <= this.y+this.height-1) {
            //teleport, baby!!!
            player.setX(this.teleportX + pX - this.x);
            player.setY(this.teleportY + pY - this.y);
        }
    }


    //render for debugging purposes
    render(ctx, camera) {
        ctx.save();
        //draw teleport in green
        ctx.fillStyle = "rgba(124, 252, 0, .25)";
        ctx.fillRect(this.x*tileWidth-camera.x, this.y*tileHeight-camera.y, this.width*tileWidth, this.height*tileHeight);
        //draw destination in red
        ctx.fillStyle = "rgba(255, 0, 0, .25)";
        ctx.fillRect(this.teleportX*tileWidth-camera.x, this.teleportY*tileHeight-camera.y, this.width*tileWidth, this.height*tileHeight);
        ctx.restore();

    }
}