// without bind we loose the context of the object (TestThing instance)
class TestThing {
  constructor(id) {
      this.id = id;
  }
  logId() {
      setTimeout(function() {
          console.log('this.id is:', this.id);
      }.bind(this), 0);
  }
}

(new TestThing(12345)).logId();