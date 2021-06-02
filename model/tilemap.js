const tempy = new Image();
let tileWidth;
let tileHeight;

class Tilemap {
    constructor(width, height) {
        //map dimensions
        this.width = width;
        this.height = height;

        //layers is an array containing info on the tilemap (visual and logical)
        this.layers =
            //visual layer - contains info on which tile should be placed on each position in the grid
            [[], 
            //logic layer - collision/path-finding etc.
            []];

            //initialize level arrays
            for(let i = 0; i < width * height; i++) {
                //we just fill both layers with 0 so they are "empty"
                this.layers[0].push(0);
                this.layers[1].push(0);
            }

            //create boundary around world
            for(let i = 0; i < width; i++) {
                for (let j = 0; j < height; j++) {
                    if (i == 0 || j == 0 || i == width-1 || j == height-1) {
                        this.setTile(1, i, j, 1);
                    }
                }
            }

    }

    //accesses a 1d array as if it was a 2d array
    getTile(layer, x, y) {
        return this.layers[layer][x + this.width * y];
    }
    setTile(layer, x, y, value) {
        this.layers[layer][x + this.width * y] = value;
    }

    render(ctx, camera) {
        for(let i = 0; i < this.width; i++) {
            for(let j = 0; j < this.height; j++) {
                const xPosition = tileWidth * i - camera.x;
                const yPosition = tileHeight * j - camera.y;

                switch(this.getTile(0, i, j)) {
                    //wooden floor
                    case 1:
                        //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                        ctx.drawImage(floorSheet, 16*8, 16*19, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    //brick floor
                    case 2:
                        ctx.drawImage(floorSheet, 16, 16*7, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    //brick wall top left corner
                    case 3:
                        ctx.drawImage(wallSheet, 0, 16*3, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    //brick wall top
                    case 4:
                        ctx.drawImage(wallSheet, 16, 16*3, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    //brick wall top right corner
                    case 5:
                        ctx.drawImage(wallSheet, 16*2, 16*3, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    //brick wall vertical
                    case 6:
                        ctx.drawImage(wallSheet, 0, 16*4, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    //brick wall south-west corner
                    case 7:
                        ctx.drawImage(wallSheet, 0, 16*5, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    //brick wall south-east corner
                    case 8:
                        ctx.drawImage(wallSheet, 16*2, 16*5, 16, 16, xPosition, yPosition, tileWidth, tileHeight);
                        break;
                    case 9:
                        break;
                }
            }
        }
    }

    //adds obstacle on the logic layer
    addObstacle(x, y, width, height) {
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                this.setTile(1, x+i, y+j, 1);
            }
        }
    }

    //removes obstacle on the logic layer
    removeObstacle(x, y, width, height) {
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                this.setTile(1, x+i, y+j, 0);
            }
        }
    }

    //generate room based on a position and width/height
    createRoom(x, y, width, height) {
        for (let i = -1; i <= width; i++) {
            for (let j = -1; j <= height; j++) {
                //if i == -1 || i == width - create boundary
                if(i == -1 || i == width) {
                    if(j == -1 && i == -1) {
                        this.setTile(0, x+i, y+j, 3);
                    } else if (i == width && j == -1) {
                        this.setTile(0, x+i, y+j, 5);
                    } else if (j >= 0 && j < height) {
                        this.setTile(0, x+i, y+j, 6);
                    } else if (i == -1 && j == height) {
                        this.setTile(0, x+i, y+j, 7);
                    } else if (i == width && j == height) {
                        this.setTile(0, x+i, y+j, 8);
                    }


                    this.setTile(1, x+i, y+j, 1)
                }else if (j == height && i >= 0 && i < width) {
                    this.setTile(0, x+i, y+j, 4);
                    this.setTile(1, x+i, y+j, 1);
                } else {
                    if (j == -1) {
                        //set wall
                        this.setTile(0, x+i, y+j, 4)
                    } else if (j != height)
                        //set floor
                        this.setTile(0, x+i, y+j, 1)
                }

                //create y boundary
                if(j == -1 || j == height) {
                    this.setTile(1, x+i, y+j, 1);
                }
            }
        }
    }

    //generate hallway on a position and width/height
    createVerticalHallway(x, y, width, height) {
        for (let i = -1; i <= width; i++) {
            for (let j = 0; j < height; j++) {
                //if i == -1 || i == width - create boundary
                if(i == -1 || i == width) {
                    this.setTile(0, x+i, y+j, 6);
                    this.setTile(1, x+i, y+j, 1);
                } 
                //else set visual tile and make sure logic tile is empty
                else {
                    this.setTile(0, x+i, y+j, 2);
                    this.setTile(1, x+i, y+j, 0);
                }
            }
        }
    }

    createHorizontalHallway(x, y, width, height) {
        for (let i = 0; i < width; i++) {
            for (let j = -1; j <= height; j++) {
                //if j == -1 || j == height create boundary and wall tile
                if (j == -1 || j == height) {
                    this.setTile(0, x+i, y+j, 4);
                    this.setTile(1, x+i, y+j, 1);
                }
                //else set visual tile and make sure logic tile is set to empty
                else {
                    this.setTile(0, x+i, y+j, 2);
                    this.setTile(1, x+i, y+j, 0);
                }
            }
        }
    }
}
