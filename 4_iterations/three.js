// for of
// [{}, {}, {}]

const kal=[1,2,3,4,5]

for (const num of kal) {
    console.log(num);
}

const greet = "Hello computer"
for(const i of greet){
    //console.log(`eachc hcar is ${i}`)
}

// maps
const map = new Map()
map.set('Tengu',90)
map.set('Moltress',290)
map.set('Fighter',190)
map.set('Chomp',50)
map.set('Fighter',190)

console.log(map)

for (const key of map) {
    console.log(key)
}
for (const [key, value] of map) {
    console.log(key, `:`+ value)
}

let newobj = {
    sport1: 'FOOTBALL',
    sport2: 'CHESS',
    sport3: 'VOLLEYBALL'
}
for (const [key, value] of newobj) {
    console.log(key + `:` +vlue)
}