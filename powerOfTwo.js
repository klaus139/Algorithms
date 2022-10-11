//Complete the function that takes a non-negative integer n as input, 
//and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powerOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n.length; i++){
        arr.push(2 ** i);
    } 
    return arr;
}

powerOfTwo(4);

// //another method to solve this problem
