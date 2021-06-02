function playSound(path, volumePercentage) {
    let audio = new Audio(path);
    audio.volume *= volumePercentage;
    audio.play();
}

function playBackgroundMusic(path, volumePercentage){
    backgroundMusic = new Audio(path);
    backgroundMusic.volume *= volumePercentage;
    backgroundMusic.loop = true;
    
    backgroundMusic.play();
}