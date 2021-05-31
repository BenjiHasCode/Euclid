const Item = {
    BUCKET: 0,
    ACID: 1,
    KEY: 2,
    BOOKCASE: 3
}

function getItemName(itemID) {
    switch(itemID) {
        case 0:
            return "A Bucket";
        case 1:
            return "A vial of Acid";
        case 2:
            return "A Key";
        case 3:
            return "A Bookcase";
        default:
            //return "Placeholder";
            return "I have no idea what this is....";   //thought this was funnier than placeholder
    }
}