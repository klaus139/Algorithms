function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin){
        sharkSpeed /= 2;
    }
    if (pontoonDistance / youSpeed < sharkDistance / sharkSpeed){
        return "Alive!";
    } else {
        return "Shark Bait!";
    }
}

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}




