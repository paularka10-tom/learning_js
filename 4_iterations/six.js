const code = ["js", "ruby", "java", "cpp", "php"]

const values = code.forEach((item)=>{
    console.log(item);
    return item;            // forEach doesnt return
})
console.log(values)

const Nums = [1,2,3,4,5,6,7,8]

let hunt = Nums.filter((num)=> num>3)


console.log(hunt)