// func.call 

let worker = {
  someMethod() {
    return 1;
  },
  
  slow(x) {
    // actually, there can be a scary CPU-heavy task here
    return `i am NOT cached! ${x * this.someMethod()}`;
    // return x;
  }
};
let worker2 = {
  someMethod() {
    return 3;
  },
  
  slow(x) {
    // actually, there can be a scary CPU-heavy task here
    return `i am NOT cached! ${x * this.someMethod() * 5}`;
    // return x;
  }
};

function cachingDecorator(func, context) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return `i am cached! :) ${cache.get(x)}`;
    }
    let result = func.call(context, x); // "this" is passed correctly now
    cache.set(x, result.match('\\d+'));
    return result;
  };
}

worker.slow = cachingDecorator(worker2.slow, worker); // now make it caching

console.log(worker.slow(2));
console.log(worker.slow(2));