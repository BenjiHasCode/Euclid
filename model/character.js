class Character extends Entity{
    constructor(x, y, hp, direction, state, spritesheet) {
        super(x, y);
        this.hp = hp || 100;
        this.currentHp = hp;
        this.direction = direction || Direction.RIGHT;
        this.state = state || CharacterState.IDLE;
        this.spritesheet = spritesheet;
        this.currentAction = null; ///
        this.goal; //REMOVE ??
    }

    update(level) {
        //check if character is currently doing something
        if(this.state != CharacterState.IDLE) {
            //update current action
            this.updateAction(level);
        }else {
            //check if character can start doing something
                //check if direction needs updating
            this.updateDirection();

            //check attack input
            if (spacePressed) {
                this.state = CharacterState.ATTACK;
            } 
            //check move input
            else if (upPressed || downPressed || leftPressed || rightPressed) {
                this.state = CharacterState.MOVE;//refactor todtodotodortodortodoytdfiytfiytfiytfiytfiytfiyktfutyuiyt
            }/* else if (enterPressed) {
                this.interact(level);
            }*/
        }

        //TODO REFACTOR UPDATE SPRITESHEET COUNTER HERE?
        this.spritesheet.updateSpriteCounter();
    }

    updateAction(level) {
        //continue doing current action
        switch(this.state) {
            case CharacterState.ATTACK:
                this.attack(level);
                break;
            case CharacterState.MOVE:
                switch(this.direction) {
                    case Direction.UP:
                        this.moveUp(level);
                        break;
                    case Direction.LEFT:
                        this.moveLeft(level);
                        break;
                    case Direction.DOWN:
                        this.moveDown(level);
                        break;
                    case Direction.RIGHT:
                        this.moveRight(level);
                        break;
                }
                break;
        }
    }

    updateDirection() {
        //check if up, down, left or right are pressed
        if (upPressed) {
            this.direction = Direction.UP;
        } else if (downPressed) {
            this.direction = Direction.DOWN;
        } else if (leftPressed) {
            this.direction = Direction.LEFT;
        } else if (rightPressed) {
            this.direction = Direction.RIGHT
        }
    }

    moveUp(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.y-1;

            //see if goal is valid
            if (level.tilemap.getTile(1, Math.floor(this.x), Math.floor(this.goal)) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.y -= .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.y <= this.goal) {
                this.y = this.goal;
                this.state = CharacterState.IDLE;
                this.goal = undefined;
            }
        }
    }

    moveDown(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.y+1;

            //see if goal is valid
            if (level.tilemap.getTile(1, Math.floor(this.x), Math.floor(this.goal)) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.y += .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.y >= this.goal) {
                this.y = this.goal;
                this.state = CharacterState.IDLE;
                this.goal = undefined;
            }
        }
    }

    moveLeft(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.x-1;

            //see if goal is valid
            if (level.tilemap.getTile(1, Math.floor(this.goal), Math.floor(this.y)) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.x -= .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.x <= this.goal) {
                this.x = this.goal;
                this.state = CharacterState.IDLE;
                this.goal = undefined;
            }
        }
    }

    moveRight(level) {
        //check if character has goal - if not assign goal, else move
        if (this.goal == undefined) {
            //define goal
            this.goal = this.x + 1;

            //see if goal is valid
            if (level.tilemap.getTile(1, Math.floor(this.goal), Math.floor(this.y)) != 0) {
                this.goal = undefined;
                this.state = CharacterState.IDLE;
            }
        } else {
            //move
            this.x += .005 * (Date.now() - deltaTime);

            //check if we hit goal (or overshot)
            if(this.x >= this.goal) {
                this.x = this.goal;
                this.state = CharacterState.IDLE;
                this.goal = undefined;
            }
        }
    }

    attack(level) {

    }

    /*
    interact(level) {

    }
    */
}