class Noob extends Character {
    constructor(x, y, hp, direction, state, spritesheet, movement) {
        super(x, y, hp, direction, state, spritesheet, movement);
    }

    render(ctx, camera) {
        const xDrawPosition = this.x*tileWidth-camera.x;
        const yDrawPosition = this.y*tileHeight-camera.y;
        
        const framePosition = 16*this.spritesheet.currentFrame;

        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        switch(this.state) {
            case CharacterState.IDLE:
                switch(this.direction) {
                    case Direction.UP:
                        ctx.drawImage(this.spritesheet.image, 0, 48, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.LEFT:
                        ctx.drawImage(this.spritesheet.image, 0, 16, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.DOWN:
                        ctx.drawImage(this.spritesheet.image, 0, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.RIGHT:
                        ctx.drawImage(this.spritesheet.image, 0, 32, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                }
                break;
            case CharacterState.MOVE:
                switch(this.direction) {
                    case Direction.UP:
                        ctx.drawImage(this.spritesheet.image, framePosition, 48, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.LEFT:
                        ctx.drawImage(this.spritesheet.image, framePosition, 16, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.DOWN:
                        ctx.drawImage(this.spritesheet.image, framePosition, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.RIGHT:
                        ctx.drawImage(this.spritesheet.image, framePosition, 32, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                }
                break;
            case CharacterState.ATTACK: //TODO
                switch(this.direction) {
                    case Direction.UP:
                        ctx.drawImage(this.spritesheet.image, 0, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.LEFT:
                        ctx.drawImage(this.spritesheet.image, 44, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.DOWN:
                        ctx.drawImage(this.spritesheet.image, 66, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                    case Direction.RIGHT:
                        ctx.drawImage(this.spritesheet.image, 22, 0, 16, 16, xDrawPosition, yDrawPosition, tileWidth, tileHeight);
                        break;
                }
                break;
            case "HURT":
                switch(this.direction) {
                    case "NORTH":
                        ctx.drawImage(this.spritesheet.image, 0, 0, 16, 16, this.x-camera.x, this.y-camera.y, tileWidth, tileHeight);
                        break;
                    case "WEST":
                        ctx.drawImage(this.spritesheet.image, 44, 0, 16, 16, this.x-camera.x, this.y-camera.y, tileWidth, tileHeight);
                        break;
                    case "SOUTH":
                        ctx.drawImage(this.spritesheet.image, 66, 0, 16, 16, this.x-camera.x, this.y-camera.y, tileWidth, tileHeight);
                        break;
                    case "EAST":
                        ctx.drawImage(this.spritesheet.image, 22, 0, 16, 16, this.x-camera.x, this.y-camera.y, tileWidth, tileHeight);
                        break;
                }
                break;
            case "DEAD":
                ctx.drawImage(this.spritesheet.image, 22, 0, 16, 16, this.x-camera.x, this.y-camera.y, tileWidth, tileHeight);
                break;
        }
    }
}