// if      (>, <, <=, >=, =, ==, ===)
let userLogged = true
let temp = 23

// if(temp <= 25){
//     console.log("Less THAN 25")
// }
// else
//     console.log("MORE THAN 25")


// let score = 234
// if (score>100){
//     const power = "fly"
//     console.log(`USER: ${power}`)
// }

// const bal = 3400
// if(bal>5000) {
//     console.log("ENOUGH")
// } //implicit scope
// else if(bal>4000) {
//     console.log("RICH")
// }
// else if(bal>3500) {
//     console.log("TOO RICH")
// }
// else {
//     console.log("INFINITE")
// }

let userLoggedin = true
let debitCard = true
let loggedINfromAPP = false
let loggedINfromWEB =true

if (userLoggedin && debitCard && 1==2){
    console.log("ALLOWED IN")
}
if (loggedINfromAPP || loggedINfromWEB){
    console.log("ALLOWED IlN")
}