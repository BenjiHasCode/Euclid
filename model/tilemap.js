class Tilemap {
    constructor(cols, rows, tileSize, tileSize) {
        //map dimensions
        this.cols = cols;
        this.rows = rows;
        //tile size - the size of each tile in pixels across / pixels down
        this.tileSize = tileSize;
        
        //layers is a 2d array containing info on the tilemap
        this.layers =
            //visual layer - contains info on which tile should be placed on each position in the grid
            [[]], 
            //logic layer - collision/path-finding etc.
            [[]];
    }

    //accesses a 1d array as if it was a 2d array
    getTile(layer, col, row) {
        return this.layers[layer][row * this.cols + col];
    }
}
