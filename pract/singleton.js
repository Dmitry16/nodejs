class SingletonClass {
  constructor(name) {

    if (SingletonClass.instance) {
      return SingletonClass.instance;
    }

    SingletonClass.instance = this;

    this.name = name;

    return this;
  }
}

let inst1 = new SingletonClass('qq');
let inst2 = new SingletonClass('aa');
let inst3 = new SingletonClass('zz');

console.log('inst1 name:', inst1.name);
console.log('inst2 name:', inst2.name);
console.log('inst3 name:', inst3.name);