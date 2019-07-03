function work(a, b) {
  console.log('original work::', a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}
// work.calls = new Map([['key1', 'value1'], ['key2', 'value2']]);
// work.calls.delete('key1');
// work.calls.delete('key2');
console.log('work.calls::', work.calls);