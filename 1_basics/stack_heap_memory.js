// Stack(Primitive), Heap(Non-primitive)

let myName="Bantu"
let name2 = myName
name2 = "bokachoda"

console.log(name2)
console.log(myName)

let user1 = {
    mail: "joy@mail.com",
    upi_id: "joy123@mlo",
}
let user2 = user1

user2.mail = "bantu@mail.com"
console.log(user1.mail)
console.log(user2.mail)