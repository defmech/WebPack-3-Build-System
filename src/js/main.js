import {
  uniq,
} from 'lodash';

// eslint-disable-next-line
import style from '../scss/main.scss';

import TestClass from './testclass';

const testClass = new TestClass();

console.log('main.js', 'testClass', testClass.name);

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('main.js', "document.readyState === 'complete'");
    // Test use of uniq
    console.log('main.js', 'uniq([1,1,1,2])', uniq([1, 1, 1, 2]));
  }
};
