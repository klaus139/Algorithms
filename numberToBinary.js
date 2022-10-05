let a = i % 10;
let b = i % 100;

if (a == 1 && b != 11) {
    console.log(i + "st")
}
if (a = 2 && b != 12){
    return i + "nd"
}
if (a = 3 && b != 13){
    return i + "rd"
}
else {
    return i + "th"
}
