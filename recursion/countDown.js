//using recursion to call the function over and over again

function countDown(num) {
    if (num <= 0) {
        console.log('all done');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(5);
// when using recursion make sure to write a conditional statement that acts as a base case to prevent overflow
function countUp(num) {
    if (num === 8){
        console.log("this is the base case");
        return;
    }
    console.log(num);
    num++;
    countUp(num);
}
countUp(0)


