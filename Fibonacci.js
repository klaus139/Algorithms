//Given a number 'n' find the first 'n' element of the fibonacci sequence and return them in an array
//The fibonacci sequence is a sequence of numbers where the next number is the sum of the previous two numbers
//The first two numbers in the fibonacci sequence are 0 and 1
//The first 10 numbers in the fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//The first 5 numbers in the fibonacci sequence are 0, 1, 1, 2, 3
//The first 1 number in the fibonacci sequence is 0
function fibonacci (n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}
console.log(fibonacci(5));