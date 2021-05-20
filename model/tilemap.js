const tempy = new Image();
let tileWidth;
let tileHeight;

class Tilemap {
    constructor(cols, rows) {
        //map dimensions
        this.cols = cols;
        this.rows = rows;

        //layers is a 2d array containing info on the tilemap
        this.layers =
            //visual layer - contains info on which tile should be placed on each position in the grid
            [[
                //TODO
            ], 
            //logic layer - collision/path-finding etc.
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ]];
    }

    //accesses a 1d array as if it was a 2d array
    getTile(layer, row, col) {
        return this.layers[layer][row * this.cols + col];
    }

    render(ctx, camera) {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                ctx.drawImage(tempy, tileWidth*i-camera.x, tileHeight*j-camera.y, tileWidth, tileHeight);
            }
        }
    }
}
