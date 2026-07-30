let a =500                                // global scope

if(true){                      // block scope
    let a=5
    const b =20
    console.log(a)
}                             //  {}=>scope for functions, if-else, loops

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(a)              // a is declared only in if statement
//console.log(b)              // b ...  ...   ...     ... 
