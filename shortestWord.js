function shortWord(str){
   var words = str.split('');
   var shortestWord = words[0];
   for(var i = 0; i < words.length; i++){
        if( words[i].length < shortestWord.length){
            shortestWord = words[i];
        }
   }
   return shortestWord.length;
}
console.log(shortWord('this is a new me'))

