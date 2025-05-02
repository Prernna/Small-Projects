let array = [1,2,3,4,5,9];
console.log("Array list is : ",array);

function arraySwap(array){
  //create variable to store and then swap values
  let lastIndex = array.length-1;
  let firstIndex = array[0]
  array[0]=array[lastIndex]
  array[lastIndex]=firstIndex
  return array;
}
console.log(arraySwap(array))
