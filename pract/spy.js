function work(a, b) {
  console.log('the sum in the original work function is:', a + b ); // work is an arbitrary function or method
}

work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
console.log('work.calls::', work.calls);

let callNum = 1;
for (let args of work.calls) {
  console.log( `arguments in call N${callNum}: work( ${args.join()} )` ); // "call:1,2", "call:4,5"
  callNum++;
}

function spy(func) {
  
  wrapper.calls = [];

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(work, arguments);
  }

  return wrapper;
}
