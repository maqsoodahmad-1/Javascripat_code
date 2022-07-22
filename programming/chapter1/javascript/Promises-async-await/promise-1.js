//Promise chaining 
//In the promise chaining if the returned value is promise then the further excution is stopped untill the promise is settled
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000) ;
}).then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result*2),1000);
    });
}).then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result*2),1000);
    });
}).then(function(result)  {
    
     console.log(result);
    
});