// const promiseone=new Promise(function(resolve,reject){
//     //DO an async task
//     // DB calls , cryptography,network 
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })


// promiseone.then(function(){
//     console.log("Promise consumed");
    
// })


const promisefive=new Promise( (resolve,reject) =>{
    setTimeout( () => {
        let error=false;
        if(!error){
            resolve({username:"Ayush Ranjan",password:"1234"})
        }else{
            reject('ERROR')
        }
    },1000)
});

promisefive
.then( (user) => {
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch( (error) => {
    console.log(error);
})



// async function consumePromiseFive() {
//     try {
//         const respone=await promisefive;
//         console.log(respone);
//     } catch (error) {
//         console.log(error);  
//     }
// }

// consumePromiseFive();

