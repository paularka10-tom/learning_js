// Immediately invoked Function Expression

(function chai(){
    // named IIFY
    console.log(`Database connected`)
});      // ({function})()-> immediately executes the function   ()-> execution call

((game)=> {
    // unnamed IIFY
    console.log(`Database 2 connected ${game}`)
})("football")   // ; -> needed after the first function is necessary