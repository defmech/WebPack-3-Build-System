const name = 'TestClassName';

export default class TestClass {
  constructor() {
    console.log('testclass.js', 'TestClass constructor');
  }

  toString() {
    return name;
  }

  get name() {
    return name;
  }
}
