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