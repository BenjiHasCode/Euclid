function playSound(path, volumePercentage) {
    let audio = new Audio(path);
    audio.volume *= volumePercentage;
    audio.play();
}

function playBackgroundMusic(path, volumePercentage){
    let audio = new Audio(path);
    audio.volume *= volumePercentage;
    audio.loop = true;
    
    audio.play();
}