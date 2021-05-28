const TextSpeed = {
    SLOW: 300,
    MEDIUM: 200,
    FAST: 50
}

class Dialogue {
    constructor(message, speed) {
        //we split the message into lines
        this.message = message.split("\n");
        this.speed = speed;
        this.lastUpdate = Date.now();
        this.index = 0; //we are at the start of text
    }

    update() {
        //find complete message length
        let messageLength = 0;
        this.message.forEach(text => {
            messageLength += text.length;
        });

        //check delta time
        if (Date.now() - this.lastUpdate >= this.speed) {
            //update index
            if (this.index < messageLength) {
                this.index++;
            }

            //check if player is trying to "skip" dialogue
            if(spacePressed) {
                if(this.index < messageLength) {
                    this.index = messageLength;
                } 
                //if entire text is displayed, and space is pressed, exit dialogue
                else { //TODO FIX LATER
                    gameState = GameState.PLAY;
                }
            }

            this.lastUpdate = Date.now();
        }
/*
        //check if player is trying to "skip" dialogue
        if(spacePressed)
            if(this.index < messageLength)
                this.index = messageLength;*/
    }

    render(canvas, ctx) {
        //first we declare the variables for our dialogue box
        const sX = 16;          //s = source (where in the source material)
        const sY = 16*7;
        const sWidth = 16*3;
        const sHeight = 16*3;
        const dX = canvas.width * .1;
        const dY = canvas.height * .1;  //d = destination (where we'll draw on the canvas)
        const dWidth = canvas.width * .8;
        const dHeight = canvas.height * .8;
        //draw box
        ctx.drawImage(GUISheet, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

        //draw text
        ctx.save();
        let textSize;

        
        if (canvas.width * .8 < canvas.height * .1)
            textSize = canvas.width * .8;
        else
            textSize = canvas.height * .1;
        //define text info
        ctx.font = "bold " + textSize + "px Arial";
        ctx.textBaseline = "top";   //makes the text appear under the x, y coordinate (normally it appears above (which is problematic if the font size change))
        ctx.fillStyle = "white";


        let tempDex = this.index;
        //write the strings
        for(let i = 0; i < this.message.length; i++) {
            if (this.tempDex >= this.message[i].length) {
                ctx.fillText(this.message[i], dX + dWidth * .1, dY + dWidth * .1 + i*textSize/*, canvas.width * .6*/);
               // this.tempDex -= this.message[i].length;
            } else {
                const partMessage = this.message[i].substring(0, tempDex);
                ctx.fillText(partMessage, dX + dWidth * .1, dY + dWidth * .1 + i*textSize/*, canvas.width * .6*/);
            }
            tempDex -= this.message[i].length;

        }

        
        ctx.restore();
    }
}