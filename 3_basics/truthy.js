const usermail ="arka@mail"

if (usermail){
    console.log("GOT MAIL")
} else{
    console.log("NO MAIL FOUND")
}
// falsy
//false, null, undefined, 0, -0, BigInt 0n, NaN,""

 //truthy
 // "0", 'false, " ", [],{}, function(){}
 if(usermail.length===0){
    console.log("Empty")
 }
 else{
    console.log(" not Empty")
 }

 let obj = {}
 if(Object.keys(obj).length===0){console.log("emplty OBJECT")}

// Nullish Coalescing Operator (??): null undefined

let val2 = 90
 //val2 = 1 ?? 4       // for database
 //val2 = null ?? 19

// val2 =  undefined ?? 8

val2 = null ?? 10 ?? 80


console.log(val2)

//Ternary operator
//condition ? true:false

const water = 90
water>=60?console.log("more than 60"):console.log("less than 60")
