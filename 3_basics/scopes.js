let a =500                                // global scope

if(true){                      // block scope
    let a=5
    const b =20
    //console.log(a)
}                             //  {}=>scope for functions, if-else, loops

//console.log(a)              // a is declared only in if statement
//console.log(b)              // b ...  ...   ...     ... 


function one(){
    const username ="DER";

    function two(){
        const website = "YT"
        //console.log(username);
    }
   // console.log(website);
    two()
}
one()

if(true){
    const username="s"
    if (username=="s"){
        const p = "web";
        //console.log(username+p)
    }
    //console.log(p)
}
//console.log(username)


//@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(add(445))
function add(num){
    return num+1;
}

console.log(adding(445))
const adding = function(num){
    return num+1;
}
