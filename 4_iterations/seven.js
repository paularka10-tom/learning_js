const numb = [1,3,4,2,5,6,7,8]

//const newnum = numb.map( (num)=>num+10)

const nonum = numb
        .map((num)=>num*10)
        .map((num)=>num+5)
        .filter((num)=>num>40)
console.log(nonum)