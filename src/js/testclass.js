const name = 'TestClassName';

export default class TestClass {
  constructor() {
    console.log('testclass.js', 'TestClass constructor');

    setTimeout(() => {
      console.log('testclass.js', 'After delay');
    }, 2000);
  }

  toString() {
    return name;
  }

  get name() {
    return name;
  }
}
