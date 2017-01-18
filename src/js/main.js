// eslint-disable-next-line
import style from '../scss/main.scss';

// import { uniq } from 'lodash';

import TestClass from './testclass';

const testClass = new TestClass();

console.log('main.js', 'testClass', testClass.name);

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('main.js', "document.readyState === 'complete'");
  }
};
