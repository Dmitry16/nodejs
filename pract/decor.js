// caching decorator.
// let's say the function 'slow' produces a very slow (expensive) process.
// but it's a pure function: with the same input (parameters) it returns the same result.
// so in order to avoid expensive repeated calculations we can remember (cache) the results.

function slow(x) {
  // here are some expensive calculations
  console.log('i am very slow :(', x);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    // if there is no 'x' in cache then calculate (original slow) 'x', save the result
    // into cache and return the result
    let result = func(x);
    cache.set(x, result);
    return result;
  }
}

let decoratedSlow = cachingDecorator(slow);

console.log('i am not cached :( ', decoratedSlow(1) );
console.log('i was cached :) ', decoratedSlow(1) );
console.log('i am not cached :( ',  decoratedSlow(2) );
console.log('i was cached :) ',  decoratedSlow(2) );
