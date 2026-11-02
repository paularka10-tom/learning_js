const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("ASYNC task completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promis consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const Promisetre = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "MINE", mail: "chai@example.com"})
    },1000)
})
Promisetre.then(function(user){
    console.log(user)
})

const Promisef = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){resolve({username:"hitesh",passwor:"111"})}
        else{
            reject('Error: Not good')
        }
    },1000)
})

Promisef
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error); 
}).finally(()=>console.log("The promise is resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "JS2", password:"1212"})
        }
        else{
            reject('ERROR: JS gone wronng')
        }
    },1000)
});
async function consumepromiseFive(){
    const response = await promiseFive
    console.log(response);
}
consumepromiseFive();