//dates

let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())
// console.log(typeof(myDate))

let makeDate = new Date(2023, 0,23, 4,26)
let getDate = new Date("2034-04-13")
// console.log(makeDate.toLocaleString())
// console.log(getDate.toLocaleString())

let myTime  = Date.now()
// console.log(myTime)
// console.log(getDate.getTime())
console.log(Math.floor(getDate.getTime()/1000))

let gudDate = new Date()
gudDate.toLocaleString('default',{
    weekday: "narrow",
    timeZone: "",
})