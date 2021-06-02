//a simple character (mostly a leftover from when this was a roguelike project, but still used for player character)
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
        }
    }
}