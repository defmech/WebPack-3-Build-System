const name = 'TestClassName';

export default class TestClass {
  constructor() {
    console.log('testclass.js', 'TestClass constructor');

    setTimeout(() => {
      console.log('testclass.js', 'After delay', 'name', name);
    }, 2000);
  }
}
