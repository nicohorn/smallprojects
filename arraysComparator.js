//Program that checks if two arrays contains a common item. This was done with the purpose of not having a O(a*b) function, but rather a O(n) function to maximize TIME efficiency.
//Author: Nicolas Horn.

const array1 = ['a','b','c','w'];
const array2 = ['z','y','w'];

function containsCommonItem(arr1, arr2){
  //Loop through first array and create object where properties === items in the array.
  let map = {};
  for (let i = 0; i < arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i];
      map[item] = true;
    }
  }

  //Loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
      return true;
    }
  }
  return false;

}

console.log(containsCommonItem(array1,array2));

//Wild comment has appeared
