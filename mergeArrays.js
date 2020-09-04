//Program that merges two sorted arrays into one sorted array.
//Author: Nicolás Horn.

function mergeArrays(arr1, arr2){
  if(arr1.length === 0){
    return arr2;
  }
  if(arr2.length === 0){
    return arr1;
  }

  const mergedArray = [];
  let item1 = arr1[0];
  let item2 = arr2[0];
  let i = 1;
  let j = 1;

  while(item1 || item2){
    if(item2 === undefined || item1 < item2){
      mergedArray.push(item1);
      item1 = arr1[i];
      i++;
    }
    else{
      mergedArray.push(item2);
      item2 = arr2[j];
      j++;
    }
  }

  return mergedArray;

}

console.log(mergeArrays([1,3,5],[2,4,6]));
