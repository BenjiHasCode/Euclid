class Character extends Entity{
    constructor(x, y, direction, state, spritesheet) {
        super(x, y);
        this.direction = direction || Direction.RIGHT;
        this.state = state || CharacterState.IDLE;
        this.spritesheet = spritesheet;
        this.goal; //REMOVE ??
    }

    update(level) { //REFACTOR THE KEY INPUT OUT OF CHAR AND INTO PLAYER OBJECT
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
                this.interact(level);
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
            /*case CharacterState.ATTACK:
                this.attack(level);
                break;*/
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
            if (level.tilemap.getTile(1, this.x, this.goal) != 0) {
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
            if (level.tilemap.getTile(1, this.x, this.goal) != 0) {
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
            if (level.tilemap.getTile(1, this.goal, this.y) != 0) {
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
            console.log(level.tilemap.getTile(1, this.goal, this.y));
            if (level.tilemap.getTile(1, this.goal, this.y) != 0) {
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

    interact(level) {
        switch(this.direction) {
            case Direction.UP:
                level.interactables.forEach(item => {
                    if (this.x == item.x && this.y-1 == item.y) {
                        item.interact(); //TODO PLAYER PARAMETER OR RETURN SOMETHING
                    }
                });
                break;
            case Direction.LEFT:
                level.interactables.forEach(item => {
                    if (this.x-1 == item.x && this.y == item.y) {
                        item.interact(); //TODO PLAYER PARAMETER OR RETURN SOMETHING
                    }
                });
                break;
            case Direction.DOWN:
                level.interactables.forEach(item => {
                    if (this.x == item.x && this.y+1 == item.y) {
                        item.interact(); //TODO PLAYER PARAMETER OR RETURN SOMETHING
                    }
                });
                break;
            case Direction.RIGHT:
                level.interactables.forEach(item => {
                    if (this.x+1 == item.x && this.y == item.y) {
                        item.interact(); //TODO PLAYER PARAMETER OR RETURN SOMETHING
                    }
                });
                break;
        }
    }
}