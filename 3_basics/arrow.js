const obj = {
    username: "Ander",
    price: 340,
    
    welcomeMessage: function(){
        console.log(`Welcome, ${this.username}`);
        console.log(this)
    }

}
//obj.welcomeMessage()
// obj.username = "Ian"
// obj.welcomeMessage()

//console.log(this)   // gives {}, as no context is present

function tea(){
    const name = "Max";
    console.log(this.username);
}
tea()

const gengar = () => {
    let name="ghost";
    console.log(this)
}
//gengar()

// const add = (n1,n2) => {
//     return n1+n2;
// }

//const add = (n1,n2) => (  n1+n2);  //IMPLICIT RETURN//only for single line statement

const add = (n1,n2) =>({username:"garry"});   
console.log(add(6,5))

