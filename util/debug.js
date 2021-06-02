let debug = false;

const debugButton = document.getElementById("debugButton");
const cameraSlider = document.getElementById("cameraSlider");

debugButton.addEventListener("click", ()=> {
    if(debug) {
        debug = false;
        cameraSlider.hidden = true;
    }
    else {
        debug = true;
        cameraSlider.hidden = false;
    } 
});

cameraSlider.addEventListener("input", ()=> {
    //update how many tiles can be seen at a time
    tileWidthView = 9 * cameraSlider.valueAsNumber;
    tileHeightView = 5 * cameraSlider.valueAsNumber;

    //update sprites size on screen
    tileWidth = canvas.width/tileWidthView;
    tileHeight = canvas.height/tileHeightView;
});