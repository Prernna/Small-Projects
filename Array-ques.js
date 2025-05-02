//Swap first and last index values in the array

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


//create a loop which takes an array of numbers and creates a new array where each number is increased by 1
let arr = [ 1,2,3,4,5]
for(let i=0 ; i<=arr.length-1;i++){
arr[i] += 1

console.log(arr[i]) 
}

//same with functions
function addOne(arr){

const result = []

for(let i=0 ; i<=arr.length-1;i++){
    result.push(arr[i] + 1)
    }
    return result
}
console.log(addOne(arr))

//create a function addNum(array,num)that takes am array of numbers and returns an array where each number is increased by 'num'.
function addNum(array,num){
let result = []
    for(let i = 0;i<=array.length-1;i++){
        result.push(array[i]+num)
    }
    return result;
}
console.log(addNum([1,2,3],2))
console.log(addNum([1,2,3],3))

//create a function addArrays(arr1,arr2) that takes 2 arrays of numbers and adds each number in the arrays together.
function addArrays(arr1,arr2){
    let result = []
    
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i]+arr2[i])
    }
    return result
}
console.log(addArrays([1,2],[3,4]))
console.log(addArrays([1,2,3],[4,5,6]))

//create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0;
function countPositive(nums){
    let count = 0;
   for(let i = 0; i<=nums.length-1 ; i++){
    if(nums[i]>=0){
        count ++
    }
   }
   return `Positive numbers in array are : ${count}`
}
console.log(countPositive([1,2,-2,-1,-9,-3,0,5]))

//create a func minmax(nums) that takes an array of numbers and returns an objects with minimum numbers in the array 

function minMax(nums){

    if(nums.length === 0){
    return {min : null , max : null}
    }

let object = {
min:nums[0],
max:nums[0]
}

for(let i=0;i<nums.length;i++){
let value = nums[i]

if(value<object.min){
    object.min = value
}else if(value > object.max){
    object.max = value
    }
  }
  return object
}
console.log(minMax([]))

//create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.

function countWords(words){
    const result = {}

    for(let i = 0;i<words.length;i++){
        const word = words[i]

        if(!result[word]){
            result[word]=1
        }else{
            result[word]++
        }
    }
            return result;
}
console.log(countWords(['tea','coffee','tea','tea','juice','mocktail','juice','coffee']))
