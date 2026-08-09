const nums = [1,2,3]

// let tot = nums.reduce(function(accu, currval){
//     console.log(`accumulator: ${accu}, currval : ${currval}`)
//     return accu+currval
// },2)
const tot = nums.reduce((acc, curr)=> acc+ curr,0)

console.log(tot)

const shoppikart = [
    {
        iteName:  "jso",
        price: 1001
    },
    {
        iteName:  "pythos",
        price: 1666
    },
    {
        iteName:  "opo",
        price: 9090
    }
]

const tot_price= shoppikart.reduce((accu ,item)=>accu+ item.price,0)
console.log(tot_price)