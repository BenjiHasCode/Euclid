const CharacterState = {
    IDLE: 1,
    MOVE: 2,
    /*ATTACK: 3,
    HURT: 4*/
};
Object.freeze(CharacterState);

const GameState = {
    MENU: 1,
    PLAY: 2,
    DIALOGUE: 3,
    OVER: 4 //to signify end of game 
}
Object.freeze(GameState);