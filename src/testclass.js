const name = 'TestClassName';

export default class TestClass {
  constructor() {
    console.log('testclass.js', 'name', name);
  }

  toString() {
    return name;
  }

  get name() {
    return name;
  }
}
