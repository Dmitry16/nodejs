// find error
class TestThing {
  constructor(id) {
      this.id = id;
  }
  get promise() {
      return Promise.resolve(this.id);
  }
}

async function makeThingsAsync() {
  return [
      new TestThing(1),
      new TestThing(2),
      new TestThing(3),
      new TestThing(4)
  ];
}

async function logThings() {
  console.log(
      await Promise.all(
          await makeThingsAsync().map(el => el && el.promise)
      )
  );
}

logThings();

// solution:
// (await makeThingsAsync()).map(v => v && v.promise)