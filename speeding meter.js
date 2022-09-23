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

function grabFruit(){
    return ['apple','oranges','banana','cocoa','pineapple']
}

let [x,y,z,...args] = grabFruit();

console.log(args);

function stat(a, b) {
    return[
        a  + b,
        (a + b ) / 2,
        a - b

    ]
}

//destrucring
let[sum, average, minus] = stat(10, 20);
console.log(average);




function count (string){
    let obj = {};
    for (let i = 0; i < string.length; i++){
        let char = string[i];

        if (obj.includes(string[i])){
            obj[string[i]]++;

        } else {
            obj[string[i]] = 1;
        }
    }
    return obj;
}
console.log(count('hello'));