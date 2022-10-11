function upArray(arr){
    if(arr.length === 0 || arr.some((num) => num < 0 || num > 9)){
        return null;
    }
    let num = parseInt(arr.join('')) + 1;
    return num.toString().split('').map((num) => parseInt(num));
} 
