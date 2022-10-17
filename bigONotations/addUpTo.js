//suppsoe we want to write a function that calculates the sum
//of all numbers from 1 up to (and including) some nmber n.

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i < n; i ++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(6))

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds.`);

//another approach

// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }