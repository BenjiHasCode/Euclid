const TextSpeed = {
    SLOW: 300,
    MEDIUM: 200,
    FAST: 50
}

class Dialogue {
    constructor(message, speed) {
        this.message = message;
        this.speed = speed;
        this.lastUpdate = Date.now();
        this.index = 0; //we are at the start of text
    }

    render(ctx) {
        //first we declare the variables for our dialogue box
        const sX = 16;          //s = source (where in the source material)
        const sY = 16*7;
        const sWidth = 16*3;
        const sHeight = 16*3;
        const dX = tileWidth / 2;   //we'll draw 1/2 tile in and 1/2 tile "up" (technically down :P)
        const dY = tileHeight / 2;  //d = destination (where we'll draw on the canvas)
        const dWidth = tileWidth * (tileWidthView - 1);
        const dHeight = tileHeight * (tileHeightView - 1);
        //draw box
        ctx.drawImage(GUISheet, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

        //draw text
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        const partMessage = this.message.substring(0, this.index);
        ctx.fillText(partMessage, dX + tileWidth/2, dY + tileHeight * .6);
        ctx.restore();


        //increment counter
        if (Date.now() - this.lastUpdate >= this.speed) {
            if (this.index < this.message.length) {
                this.index++;
                this.lastUpdate = Date.now();
            }
        }
    }
}