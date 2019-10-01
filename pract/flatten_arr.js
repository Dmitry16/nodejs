// array flattening
const arr = [1,2,3,4,5,6,[1,2,[3,4],[5,6,[7,7,7]]]];

let flattenedArr = [];

const flattener = arr => {
  arr.forEach(el => {
    if (typeof el === 'object') {
      flattener(el);
    } else {
      flattenedArr.push(el);
    }
  });
  return flattenedArr;
};

console.log('flattened array:', flattener(arr));