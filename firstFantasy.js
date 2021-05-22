//call setup
window.addEventListener("load", setup);
let deltaTime = Date.now();

//load game files
function setup() {
    //initialize canvas and context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //load files
    tempy.src = "assets/visual/tempy.png";
    noobSheet.src = "assets/visual/Noob.png";
    mageSheet.src = "assets/visual/Mage.png";
    rogueSheet.src = "assets/visual/Rogue.png";
    warriorSheet.src = "assets/visual/Warrior.png";
    GUISheet.src = "assets/visual/GUI0.png";
    floorSheet.src = "assets/visual/Floor.png";
    wallSheet.src = "assets/visual/Wall.png";
    potionSheet.src = "assets/visual/Potion.png";
    //doorSheet.src = "assets/visual/Door0.png";
    //trapSheet.src = "assets/visual/Trap1.png";



    //initialize player
//    const player = new Player(x, y, 100, Direction.RIGHT, "MOVE", new Spritesheet(noobSheet, 150, 4, 0, true));
    const player = new Player(new Noob(17, 39, 100, Direction.RIGHT, CharacterState.IDLE, new Spritesheet(noobSheet, 150, 4, 0, true)),0);

    //initialize camera
    const camera = new Camera(player);
    
    

    //create level
    let level = new Level();


    //start gameloop
    gameLoop(canvas, ctx, camera, player, level);
}


function gameLoop(canvas, ctx, camera, player, level) {
    //update player
    player.update(level);
    
    //update level components - enemies, triggers and so on
    level.update(player);

    //update camera
    camera.update();

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
}


//player
    //has job
        //jobs
            //knight - 1 attack - 2 or 3 extra hearts?
            //rogue - no extra hp - double attack - 1.5 movement speed?
            //mage - no extra hp - strongest attack - fireball ranged
        //different extra hp
        //different attack
    //has gold //as score
    //has movement
    //has input
//levels
    //rooms
    //random generation
    //pickups
    //enemies
    //entrancepoint
    //exit - to next level
//enemies
    //movement
    //weapon
    //ai
//triggers
//START/DEATH STATE

//rendering
    //16 tiles wide
    //9 tiles tall
    //everythin is drawn based on tilesize
    //characters are as tall and wide as a tile
    //potion 1/4?
    //health ui hearts = 1/2
    //create translation based on x,y and tile position