// I see what you mean. I provided both the challenges and their solutions. Let me give you just the challenges without the answers:

// ### Coding Challenge 1:
// Write a JavaScript function to calculate the area of a circle. The function should take one parameter, radius, and return the calculated area.



let areaOfCircle = (radius) => {
  let area = Math.PI * radius * radius;
  console.log(area)
}

areaOfCircle(25)




console.log("======================")











// ### Coding Challenge 2:
// Write a JavaScript function to check if a given number is prime. The function should take one parameter, num, and return `true` if the number is prime, and `false` otherwise.










function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false


















// ### Coding Challenge 3:
// Write a JavaScript function that takes an array of numbers and returns the average of all the numbers in the array. The function should take one parameter, numbers, which is an array of numbers, and return the calculated average.

let number = [1,2,3,4,5,6,7,8,9,10]
let averageOfArray = (number) => {
  let sum = 0
  for(let i=0; i<number.length; i++){
    sum = sum + number[i]
  }
  let averageNumber = sum/number.length
  console.log(averageNumber)
}

averageOfArray(number)




console.log("======================")












// ### Coding Challenge 4:
// Write a JavaScript function that takes a string as an argument and returns the number of vowels in the string.


let str = "aayush"
let voewlsCounter = (str) => {
  let count = 0
  for(let i=0; i<str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
      count++
    }
  }
  console.log(count)
}
voewlsCounter(str)




console.log("======================")













// ### Coding Challenge 5:
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.



let arr = [2,4,6,82,6,4,61,4,51,412,65]
let evenArr = () => {
  let nArr = []
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      nArr.push(arr[i])
    }
  }
  console.log(nArr)
}

evenArr(arr)



console.log("======================")

















// ### Coding Challenge 6:
// Write a JavaScript function that takes a string as an argument and returns the string with the first letter of each word capitalized.




let str1 = "my name is ayush";
let capitalizedStr = (str) => {

  let words = str.split(" ");
  console.log(words)

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
  
};

console.log(capitalizedStr(str1)); // Output: "My Name Is Ayush"












// ### Coding Challenge 7:
// Write a JavaScript function that takes an array of numbers and returns the second largest number in the array.


let array = [25,50,21,45,69,28,36,42,78]
let secondLargestNo = (array) => {
  let max = array[0]
  let secondMax = array[0]
  for(let i = 0; i<array.length; i++){
    if(array[i] > max){
      secondMax = max
      max = array[i]
    }
    else if (array[i] > secondMax && array[i] !== max){ secondMax = array[i]
    }
  }
  return secondMax
}

console.log(secondLargestNo(array))



console.log("====================")






// ### Coding Challenge 8:
// Write a JavaScript function that takes a string as an argument and returns the string with all the vowels removed.


let strIng = "Yuvraj";

let vowelsRemoved = (strIng) => {
  let nStr = "";
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < strIng.length; i++) {
    if (!vowels.includes(strIng[i])) {
      nStr += strIng[i];
    }
  }
  console.log(nStr);
};

vowelsRemoved(strIng); // Output: "Yvrj"

// coding challenge 9
// Write a JavaScript function that takes an array of numbers and returns a new array with the squares of each number.



let arr2 = [2,3,4,5,6]
let squares = (arr2) => {
  let nArr = []
  for(let i=0; i<arr2.length; i++){
    let final = arr2[i] * arr2[i]
    nArr.push(final)
  }
  return nArr
}

console.log(squares(arr2))






// ### Coding Challenge 10:
// Write a JavaScript function that takes a string as an argument and returns the string with all the consonants removed.




let name = "PiyushKumarSingh"
let consonantsRemove = (name) => {
  let str = ""
  for(let i=0; i<name.length; i++){
    let x = name[i] 
    if(x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u" ){
      str = str + x
    }
  }
  console.log(str)
}

consonantsRemove(name)









