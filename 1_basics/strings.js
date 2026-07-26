const name = "Aantu"
let vids = 29

console.log(name+ vids +" count")
console.log(`My name is ${name} and videos is ${vids}`)

const random = new String ('boka-choda-com')
console.log(random[0])
console.log(random.__proto__)

console.log(random.length)
console.log(random.toUpperCase())
console.log(random.charAt(3))
console.log(random.indexOf('k'))

const newp = random.substring(0,6);
console.log(newp)

const news = random.slice(-9,5)
console.log(news)

const newString = "  niggas  "
console.log(newString)

console.log(newString.trim())
const url = "https://arka.com/arka%20paul"
console.log(url.replace('%20','-'))
console.log(url.includes('akra'))
console.log(random.split('-'))