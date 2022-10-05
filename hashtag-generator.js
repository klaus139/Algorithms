//The marketing team is spending way too much time typing in hashtags.
//Let's help them with our own Hashtag Generator!

//Here's the deal:

//It must start with a hashtag (#).
//All words must have their first letter capitalized.
//If the final result is longer than 140 chars it must return false.
//If the input or the result is an empty string it must return false.

function generarateHashTag(str){
    if(str.length === 0 || str.length > 140){
        return false;
    }
    let strArr = str.split(' ');
    strArr.map((word, i)=> {
        strArr[i] = word.charAt(0).toUpperCase() + word.slice(1);
    })
    console.log(strArr)
    let hashTag = '#';
    for(let i = 0; i < strArr.length; i++){
        hashTag += strArr[i];

    }
    return hashTag;

}
console.log(generarateHashTag('codewars', 'code', 'wars'));


