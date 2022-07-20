function slow(x) {
  //there can be heavy CPU-intensive job here
  console.log(x);
  return x ;
  }

//wrapper function

function cachingDecorator(func) {
    let cache =  new Map();
    return function(x) {
     if(cache.has(x)) {//if map has x 
     return cache.get(x); //then it will return x 
     }
    let result = func(x);//otherwise call the func
    cache.set(x,result); //and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); //slow(1) is cached
console.log("Again:" +slow(1)); //the same

console.log(slow(2)); //slow 2 is cached
console.log("Again:" + slow(2)); //the same as the previous

