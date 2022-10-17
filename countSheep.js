//Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

countSheep = (arrayOfSheep) => {
    let count = 0
    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i] === true){
            count++
        }
    }
    return count
}

function countSheep(arrayOfSheep) {
    return arrayOfSheep.filter(el => el === true).length;
}

