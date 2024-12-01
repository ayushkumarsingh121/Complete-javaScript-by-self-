// Coding Challenge 1:
// Write a JavaScript function to calculate the area of a rectangle. The function should take two parameters, width and height, and return the calculated area.

let fun = (a,b) =>{
  let area = a*b;
  console.log(area)
  let parameters = 2*(a+b);
  console.log(parameters)
}

fun(2,3)

// Coding Challenge 2:
// Write a JavaScript function to check if a given number is even or odd. The function should take one parameter, num, and return "Even" if the number is even, and "Odd" if the number is odd.

let numChecker = (num) => {
  if(num % 2 === 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}
console.log(numChecker(5))
console.log(numChecker(202.37))
console.log(numChecker(54654554))


// Coding Challenge 3:
// Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers in the array. The function should take one parameter, numbers, which is an array of numbers, and return the calculated sum.

let arr = [1,2,3,4,5,10]

let sumOfArr = () => {
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum = sum + arr[i]
  }
  return sum
}
console.log(sumOfArr())


// ## Coding Challenge 4
// Write a JavaScript function that takes a variable `x` as an argument and returns its type. Do not use any built-in functions or methods to determine the type.

let typo = (x) => {
  console.log(typeof(x))
}
typo(2)
typo("2")
typo(true)


// ## Coding Challenge 5
// Write a JavaScript function that takes an array as an argument and returns a new array with the same elements, but with each element's type converted to a string. For example, if the input array is `[1, "hello", true]`, the output should be `["number", "string", "boolean"]`.

let array = [1, "hello", true]

let typeConversion = (array) => {
  let nArr = []
  for(let i=0; i<array.length; i++){
    nArr.push(typeof(array[i]))
  }
  console.log(nArr)
}

typeConversion(array)




// ## Coding Challenge 6
// Write a JavaScript function that takes a variable `x` as an argument and checks if its type is "object". The function should return `true` if the type is "object", and `false` otherwise.


let x = {
  fullName: "Ayush Kumar Singh",
  age: 20
};

let objChecker = (x) => {
  if (x !== null && typeof(x) === "object" && !Array.isArray(x)) {
    return true;
  } else {
    return false;
  }
};

console.log(objChecker(x));




// ## Coding Challenge 7
// Write a function named `reverseString` that takes a string as an argument and returns the reverse of that string. Do not use any built-in reverse methods.

let str = "Ayush"
let reverseString = (str) =>{
  let nStr = "";
  for(let i=str.length-1; i>=0; i--){
    nStr += str[i]
  }
  console.log(nStr)
}
reverseString(str)






// ## Coding Challenge 8
// Write a function named `sumArray` that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

let arr1 = [5,10,20,25,30,100]
let sumArray = (arr1) =>{
  let sum = 0
  for(let i=0; i<arr1.length; i++){
    sum += arr1[i]
  }
  console.log(sum)
}
sumArray(arr1)




// ## Coding Challenge 9
// Write a function named `findMax` that takes an array of numbers as an argument and returns the largest number in the array.



let arrw = [2, 52, 11, 63, 25, 1, 285, 2, 15, 54, 0];
let findMax = (arrW) => {
  let max = arrW[0];
  for (let i = 1; i < arrW.length; i++) {
    if (arrW[i] > max) {
      max = arrW[i];
    }
  }
  return max;
};

console.log(findMax(arrw)); // Output: 285

console.log("**************************")

// Challenge 10:
// Write a JavaScript function that checks if a variable is undefined. The function should return true if the variable is undefined, and false otherwise.


let undefinedChecker = (x) => {
  if (typeof(x) === "undefined") {
    return true;
  } else {
    return false;
  }
};

console.log(undefinedChecker(25)); // Output: false
console.log(undefinedChecker(false)); // Output: false
console.log(undefinedChecker(undefined)); // Output: true

console.log("**************************")


// Challenge 11:
// Write a JavaScript function that checks if a variable is null. The function should return true if the variable is null, and false otherwise.

let nullChecker = (x) => {
  if(x === null){
    return true
  }
  else{
    return false
  }
}

// typeof(x) === "null"  we cant use this becuase it shows obj and this is the problem of js from starting days

console.log(nullChecker(null)); // Output: true
console.log(nullChecker("")); // Output: false 
console.log(nullChecker(25)); // Output: false 
console.log(nullChecker(false)); // Output: false





console.log("===============================")

// Challenge 12:
// Write a JavaScript function that checks if a variable is either undefined or null. The function should return true if the variable is undefined or null, and false otherwise.




let checker = (x) => {
  if(typeof(x) === "undefined" || x === null){
    return true
  }
  else{
    return false;
  }
}

console.log(checker(null))
console.log(checker(undefined))
console.log(checker(25))
console.log(checker(true))



console.log("===============================")













