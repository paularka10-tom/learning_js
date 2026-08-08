const code = ["js", "ruby", "java", "cpp", "php"]

// code.forEach( function (item){
//     console.log(item)
// }  )
// code.forEach( (i)=>{
//     console.log(i)
// })

// function print(i){
//     console.log(i)
// }
// code.forEach(print)

code.forEach( (item, index, arr)=>{
    console.log(item, index, arr)
})

const mycode = [
    {
        langname: "CPP",
        langfile: ".cpp"
    },
        {
        langname: "python",
        langfile: ".py"
    },
        {
        langname: "Java",
        langfile: ".java"
    }
]

mycode.forEach((i)=>{
    console.log(i.langfile)
})