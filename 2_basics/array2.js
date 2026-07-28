const marvel = ["iron man", "thor", "hulk"]
const dc = ["batman", "flash", "superman"]

//marvel.push(dc)
//console.log(marvel[3][2])

//const all = marvel.concat(dc)
//console.log(all)

const all_heros = [... marvel, ...dc]
console.log(all_heros) 

const arr2 = [1,2,3,[4,5,6],6, [6,7,[4,5]]]
const real_arr =arr2.flat(Infinity)
console.log(real_arr)


console.log(Array.isArray("Garry"))
console.log(Array.from("Garry"))
console.log(Array.from({name:"Garry"}))  // [] interesting

let s1 =190
let s2 =250
let s3 =170
console.log(Array.of(s1, s2, s3))