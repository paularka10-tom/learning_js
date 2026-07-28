// Array

const arr1 = [1,2,3,4,5,6]
const fruits = ["banana", "apple", "melon"]

const arr2 = new Array(8,9,10,20,30)
console.log(arr1[2])

//Array methods

//arr1.push(10)
//arr1.pop()
//arr1.push(0)
//arr1.unshift(0)
//arr1.shift()
console.log(arr1.includes(45))
console.log(arr1.indexOf(5))

const newArr = arr1.join()
console.log(newArr)
console.log(typeof newArr)

//slice , splice

console.log("S ",arr1);
const n1 = arr1.slice(1,3)  // after slicing
console.log(n1)

console.log("T", arr1)  // original array


const n2 = arr1.splice(1,3)
console.log("U ",arr1);
console.log(n2)    // after splicing

// slicing doesnt change the original array
// splicing does, cuts the array into wanted and remaining parts