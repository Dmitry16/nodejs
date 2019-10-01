var a = {
  testValue: 12345,
  testMethod: function() {
      return this.testValue;
  }
};
var b = a;
var c = {};
c.testMethod = b.testMethod;
var testMethod = a.testMethod;

console.log(a.testMethod());
console.log(b.testMethod());
console.log(c.testMethod());
console.log(testMethod());