//In this kata you have to create all permutations of a non empty input string and remove duplicates, 
//if present. This means, you have to shuffle all letters from the input in all possible orders.

//Examples:

/* With input 'a'
/* Your function should return: ['a']
/* With input 'ab'
/* Your function should return ['ab', 'ba']
/* With input 'aabb'
/* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.*/



let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
}