// for
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        //console.log("555555555")
    }
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`OUTER LOOP: {i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`INNER LOOP value ${j} and inner loop ${j}`);
        //console.log(i + '*'+ j+'='+i*j);
    }
    
}
let arr1 = ["lemon","aple","mango","peach"]
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element)
    
}
// break and continue

for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log("5 detected");
        //break           // loop stopps
        continue;
    }
    console.log(`Value of i : ${i}`);

    
}