// for in
let newobj = {
    js : 'javascript',
    CPP: 'C++',
    swift: 'Swift by apple'
}

for (const key in newobj) {
    console.log(`${key} is for  ${newobj[key]}`);
}
const code = ["js", "ruby", "java", "cpp", "php"]
for (const key in code) {
    console.log(code[key]);
}