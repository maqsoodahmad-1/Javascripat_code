const res = require("express/lib/response");
//promise for successful execution
// let promise = new Promise(function(resolve, reject){

//     //the function is executed automatically when the promise is consrtructed

//     //after 1 second signal that the job is done with the rseult done
//     setTimeout( () => resolve('done'), 1000 );
// });
// promise for error 

let promise1 = new Promise(function(resolve, reject) {
// the function is executed automatically when the promise is constructed
// after 1 second signal that the job is done with the result "done"
setTimeout(() => reject('cancelled'), 1000);
});

//reaction to a successfully resolved promise
promise1.then(
    result => console.log(result), //shows done after 1 seconfd
    error => console.log(error) //doesn't run
)
