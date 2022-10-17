//You are going to be given an array of integers. 
//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal 
//to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.





function findEvenIndex(arr)
{
  let i;
  for(i = 0; i < arr.length; i++){
      let slic1 = arr.slice(0,i).reduce((num1, num2) => num1 + num2, 0);
      let slic2 = arr.slice((i + 1), arr.length).reduce((num1, num2) => num1 + num2, 0);
      if(slic1 == slic2){
        return i;
      }
  }
  return -1
}

//another method to solve this problem
let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
//this is easier in my opinion