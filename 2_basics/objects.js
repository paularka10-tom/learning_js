//singleton

//object literals

const Symb = Symbol("key1")
const JSuser = {
    name: "Arka",
    "full name": "Arka Paul",
    [Symb]: "key1",
    age: 20,
    mail:"arka@mail.com",
    hasAccount: true,
    lastLogin:[ "friday","monday"]
}
//console.log(JSuser.mail)
//console.log(JSuser["mail"])
//console.log(JSuser["full name"])
console.log(JSuser[Symb])
//console.log(typeof(JSuser[Symb]))

JSuser.mail = "arka@jail.com"
//Object.freeze(JSuser)
JSuser.mail = "arka@yahoo.com"
console.log(JSuser)

JSuser.greeting = function(){console.log("Hello user");}

JSuser.greetingTwo = function(){console.log(`Hello user, ${this.name}`);}
console.log(JSuser.greeting())
console.log(JSuser.greetingTwo())