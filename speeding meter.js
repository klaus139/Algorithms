//a function that calculates the speeding ticket
function checkSpeed(speed){
    const speedLimit = 75;
    const kmPh = 5;
    const points = Math.floor((speed - speedLimit) / kmPh);
    if (speed < speedLimit + kmPh){
        console.log('Ok');
    } else if (points >= 12){
        console.log('License suspended');
    } else {
        console.log('Points: ', points);
    }
}
checkSpeed(130);