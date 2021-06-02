//call setup
document.getElementById("start").addEventListener("click", ()=> {
    document.getElementById("controls").hidden = false;
    document.getElementById("canvas").hidden = false;
    document.getElementById("intro").hidden = true;
    setup();
});
let deltaTime = Date.now();
let gameState = GameState.DIALOGUE;
let backgroundMusic;
let d = new Dialogue("Try to get out.\n\nPress Space", TextSpeed.MEDIUM);


//load game files
function setup() {
    //initialize canvas and context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //load files
    tempy.src = "assets/visual/tempy.png";
    noobSheet.src = "assets/visual/Noob.png";
    GUISheet.src = "assets/visual/GUI0.png";
    floorSheet.src = "assets/visual/Floor.png";
    wallSheet.src = "assets/visual/Wall.png";
    potionSheet.src = "assets/visual/Potion.png";
    doorSheet.src = "assets/visual/Door0.png";
    wellSheet.src = "assets/visual/Well.png";
    bookSheet.src = "assets/visual/book.png";
    bookshelfSheet.src = "assets/visual/objects1.png";
    bucketSheet.src = "assets/visual/bucket.png";


    //initialize player
    const player = new Player(new Noob(39, 78, Direction.UP, CharacterState.IDLE, new Spritesheet(noobSheet, 150, 4, 0, true)),0);

    //initialize camera
    const camera = new Camera(player);

    //create level
    let level = new Level(80, 80);

    
    //initiate level data (I hardcoded a level for this project)
        //rooms
    level.tilemap.createRoom(35, 64, 9, 5);
    level.tilemap.createRoom(56, 68, 1, 1);
    level.tilemap.createRoom(56, 76, 1, 1);
    level.tilemap.createRoom(70, 74, 3, 3);
    level.tilemap.createRoom(43, 62, 1, 1);
    level.tilemap.createRoom(49, 57, 1, 1);
    level.tilemap.createRoom(23, 66, 1, 1);
    level.tilemap.createRoom(22, 31, 1, 1);
    level.tilemap.createRoom(20, 21, 5, 5);
    level.tilemap.createRoom(32, 23, 1, 1);
    level.tilemap.createRoom(70, 20, 1, 1);
    level.tilemap.createRoom(68, 26, 5, 5);
    level.tilemap.createRoom(38, 78, 3, 1);

        //hallways
    level.tilemap.createVerticalHallway(38, 69, 3, 10);
    level.tilemap.createHorizontalHallway(44, 68, 13, 1);
    level.tilemap.createVerticalHallway(56, 69, 1, 8);
    level.tilemap.createHorizontalHallway(57, 76, 13, 1);
    level.tilemap.createVerticalHallway(43, 62, 1,2 );
    level.tilemap.createHorizontalHallway(44, 62, 16, 1);
    level.tilemap.createVerticalHallway(49, 57, 1, 5);
    level.tilemap.createHorizontalHallway(23, 66, 12, 1);
    level.tilemap.createVerticalHallway(23, 60, 1, 6);
    level.tilemap.createVerticalHallway(22, 26, 1, 6);
    level.tilemap.createHorizontalHallway(25, 23, 8, 1);
    level.tilemap.createVerticalHallway(30, 15, 3, 8);
    level.tilemap.createVerticalHallway(38, 54, 1, 10);
    level.tilemap.createVerticalHallway(70, 20, 1, 6);
    level.tilemap.createVerticalHallway(70, 31, 1, 6);   

        //teleporters
    level.teleporters.push(new Teleporter(23, 62, 1, 1, 22, 29));
    level.teleporters.push(new Teleporter(30, 19, 3, 1, 38, 76));
    level.teleporters.push(new Teleporter(55, 62, 1, 1, 29, 66));
    level.teleporters.push(new Teleporter(38, 58, 1, 1, 70, 22));
    level.teleporters.push(new Teleporter(70, 34, 1, 1, 22, 29));

        //interactables (doors i guess ( ._.) )
    const door = new Door(38, 63, false, true);
    level.addToLevel(level.interactables, door);

        //items
    level.addToLevel(level.items, new Book(23, 21));
    level.addToLevel(level.items, new Acid(70, 28));
    level.addToLevel(level.items, new Bucket(49, 57));

        //quests
    level.addToLevel(level.quests, new RustedDoor(49, 58, Item.ACID));
    level.addToLevel(level.quests, new Well(71, 74, Item.BUCKET, Item.KEY));
    level.addToLevel(level.quests, new Bookcase(35, 64, Item.BOOK, door));
    level.addToLevel(level.quests, new EscapeDoor(39, 79, Item.KEY));


    //initiate background music
    playBackgroundMusic("assets/audio/background.mp3", .5);


    //start gameloop
    gameLoop(canvas, ctx, camera, player, level);
}



function gameLoop(canvas, ctx, camera, player, level) {
    //if gamestate is not dialogue - update game as normal
    if (gameState == GameState.PLAY) {
        //update player
        player.update(level);
            
        //update level components - enemies, triggers and so on
        level.update(player);

        //update camera
        camera.update();
    }
    //else update dialogue message
    else if (gameState == GameState.DIALOGUE) {
        d.update();
        if(gameState == GameState.PLAY)
            player.interactTimer = Date.now();
    } 
    
    //draw
    render(canvas, ctx, camera, player, level);

    //update deltaTime
    deltaTime = Date.now();

    requestAnimationFrame(()=> gameLoop(canvas, ctx, camera, player, level));
}


function render(canvas, ctx, camera, player, level) {
    ctx.imageSmoothingEnabled = false;
    //clear
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //draw level
    level.render(ctx, camera);
    
    //draw player
    player.render(ctx, camera);

    //dialogue
    if (gameState == GameState.DIALOGUE)
        d.render(canvas, ctx);
    else if (gameState == GameState.OVER) {
        ctx.save();
        ctx.font = "bold 1000px Arial";
        ctx.textBaseline = "top";   //makes the text appear under the x, y coordinate (normally it appears above (which is problematic if the font size change))
        ctx.fillStyle = "white";
        ctx.fillText("YOU WIN!", 0, 0, canvas.width);
        ctx.restore();
    } 
}

/*
//initiate level data
    level.tilemap.createRoom(35, 64, 9, 5);
    level.tilemap.createVerticalHallway(38, 69, 3, 10);

    //road "stairs" - to well
        //rooms
    level.tilemap.createRoom(56, 68, 1, 1);
    level.tilemap.createRoom(56, 76, 1, 1);
    level.tilemap.createRoom(70, 74, 3, 3);
        //stairs part
    level.tilemap.createHorizontalHallway(44, 68, 13, 1);
    level.tilemap.createVerticalHallway(56, 69, 1, 8);
    level.tilemap.createHorizontalHallway(57, 76, 13, 1);

    //washroom
    level.tilemap.createRoom(43, 62, 1, 1);
    level.tilemap.createVerticalHallway(43, 62, 1,2 );
    level.tilemap.createHorizontalHallway(44, 62, 16, 1);
    level.tilemap.createRoom(49, 57, 1, 1);
    level.tilemap.createVerticalHallway(49, 57, 1, 5);

    level.addQuest(new RustedDoor(49, 58, Item.ACID));


    //bedroom
    level.tilemap.createRoom(23, 66, 1, 1);
    level.tilemap.createRoom();
    level.tilemap.createHorizontalHallway(23, 66, 12, 1);
            //actual bedroom
    level.tilemap.createRoom(22, 31, 1, 1)
    level.tilemap.createRoom(20, 21, 5, 5);
    level.tilemap.createVerticalHallway(23, 60, 1, 6);
    level.tilemap.createVerticalHallway(22, 26, 1, 6);
    level.tilemap.createRoom(32, 23, 1, 1);
    level.tilemap.createHorizontalHallway(25, 23, 8, 1);
        
    level.tilemap.createVerticalHallway(30, 15, 3, 8);
        
    //add book to bedroom
    level.addItem(new Book(23, 21));

    level.triggers.push(new Teleporter(23, 62, 1, 1, 22, 29));
    level.triggers.push(new Teleporter(30, 19, 3, 1, 38, 76));

        
        
        //triggers mostly teleporters
    level.triggers.push(new Teleporter(55, 62, 1, 1, 29, 66));
        //this.triggers.push(new Teleporter(49, 68, 1, 1, 62, 76));



    level.tilemap.createVerticalHallway(38, 54, 1, 10);
    level.tilemap.createRoom(70, 20, 1, 1);
    level.tilemap.createRoom(68, 26, 5, 5);
    level.tilemap.createVerticalHallway(70, 20, 1, 6);
    level.triggers.push(new Teleporter(38, 58, 1, 1, 70, 22));


    level.tilemap.createVerticalHallway(70, 31, 1, 6);


    level.triggers.push(new Teleporter(70, 34, 1, 1, 22, 29));

        
    level.addQuest(new Well(71, 74, Item.BUCKET, Item.KEY));
    level.addItem(new Acid(70, 28));
        
        
    const door = new Door(38, 63, false, true);

    level.addInteractble(door);
    level.addQuest(new Bookcase(35, 64, Item.BOOK, door));
    level.addItem(new Bucket(49, 57));
    level.addQuest(new EscapeDoor(39, 79, Item.KEY));*/