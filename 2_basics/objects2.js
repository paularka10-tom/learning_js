//const tinderUser=new Object()    //Singleton object
const tinderUser = {}              //NoN SINGLETON OBJECT
tinderUser.id = "567xyz"   
tinderUser.name = "Max"
tinderUser.isLoggedin = false
          
//console.log(tinderUser)

const user={
    mail: "max@gmail.com",
    fullname:{
        user_fullname:{
            firstname: "Max",
            lastname: "Bonn",
        }
    }
}
console.log(user.fullname.user_fullname.firstname)

const obj1= {1: "a", 2: "c"}
const obj2 ={3:"h", 4:"f"}
const obj4 ={5:"g",6:"j"}
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1, obj2,obj4)
// // {}=> source, obj1, obj2, obj4 => target

console.log(obj3)
const obj5 = {...obj1,...obj2}
console.log(obj5)

const users = [
    {
        id: "ok@mail/com",
        name: "max",
    },
    {
        id: "okkk@mail/com",
        name: "sam",
    },
    {id: "ok0@mail/com",
        name: "tom",}
]

console.log(users[1].id)

console.log(tinderUser)
//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedin'))

const course = {
     course_name: "Javascript",
     price: "1910",
}
//course.name
const {course_name: name} = course
console.log(name);

// {            /// not an object
//     "name": "MAX",
//     "price": "123",
//    "coursename": "java"
// }
[
    {},
    {},
    {}
]