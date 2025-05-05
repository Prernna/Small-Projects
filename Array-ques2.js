//Create an array of strings , loop over the array , and check if the string 'search' is inside the array. if it is, console.log() the index of 'search' in the array . if not console.log'-1'
function checkSearch(array){
    for(let i=0; i<array.length;i++){
        if(array[i]==='search'){
            return i
        }else if('search'>1){
            return i
        }
    }
    return -1
}
console.log(checkSearch(['not','search','allow','invited','search']))

//create a function findIndex(array,word) that searches an array for a string (in word parameter) and returns index of first appearence of string. if it doesn't exist return -1.
function findIndex(array,word){
    for(let i=0;i<array.length;i++){
        if(array[i]===word){
            return i
        }
    }
    return -1
}
console.log(findIndex(['javascript','project','data','marketting','frontend'],'data'))

//create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed.
function removeEgg(food){
    let newFood = []
    let count=0;
    for(let i=0; i<food.length ;i++){
        if(food[i]==='egg' || food[i]==='Egg'){
            count++;
            continue;
        }
        newFood.push(food[i])
    }
    console.log(`egg appeared about ${count} times`)
return newFood
}
console.log(removeEgg(['egg','Egg','apple','jam','ham','egg','egg','chocolate']))

//create a loop that displays 1 to 20 in console. if number is divisble by 3 print 'fizz' , if by 5 print ' Buzz', if by 3 and 5 display 'FizzBuzz'.
for(let i=0; i<=20;i++){
    if(i%3===0){
        console.log('Fizz by 3')
    }else if(i%5===0){
        console.log('Buzz by 5')
    }
    else if(i%3===0 && i%5===0){
        console.log('FizzBuzz by both 3 and 5')
    }
}

//create a func unique(array) that takes an array of strings and returns an array where each string only appears once (there are no duplicates). try using findIndex() func.
function unique(array){
    let newarray = []
    for(let i=0;i<array.length;i++){
        const word = array[i]
        if(findIndex(newarray,word)===-1){
            newarray.push(word)
        }
    }
    return newarray
}
console.log(unique(['red','red','blue','green','black','green','black']))
