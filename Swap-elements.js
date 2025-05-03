let array = [1,2,4,7,9]
console.log(array)
function arraySwap(array){

    let lastIndex = array.length-1;
    let temp = array[0]
    array[0]=array[lastIndex]
    array[lastIndex]= temp

    return array;
    
}
console.log(arraySwap(array))
