function myName(){
    console.log("J")
    console.log("A")
    console.log("K")
    console.log("E")
}
// myName()

// function add(number1,number2){              //parameters
//     console.log(number1+number2);
// }              this wont return (res=7)

function add(number1,number2){              //parameters
    // let res = number1+number2;
    // return res;
    return number1+number2
    console.log("ARKA");      // statements after result wont work
}         

const res = add(1,6)  //arguments
// console.log(res)

function loginMessage(username="NO ONE"){
    // if(username === undefined){
    //     console.log("Enter username");
    //     return
    // }
    if(!username){
         console.log("Enter username");
         return
     }
    

    return `${username} logged in `
}
// console.log(loginMessage("Arka"))
console.log(loginMessage())