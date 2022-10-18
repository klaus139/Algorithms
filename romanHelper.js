const intToRoman = (num) => {
    const map={
        1:'I',
        4:'IV',
        5:'V',
        9:'IX',
        10:'X',
        40:'XL',
        50:'L',
        90:'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000:'M'

    }
    let result = '';
    let keys = Object.keys(map).reverse();
    //console.log(keys)
    result = keys.reduce((acc, key) => {
        while (num >= key) {
            acc += map[key];
            num -= key;
        }
        return acc;
    }, '')
    return result;

};

console.log(intToRoman(4))