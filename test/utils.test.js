// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    corrNum = 14;

    expect.equal(compareNumbers(corrNum, '14'), 'correct');
    expect.equal(compareNumbers(corrNum, 15.5), 'too high');
    expect.equal(compareNumbers(corrNum, '13.5'), 'too low');
    expect.equal(compareNumbers(corrNum, -17), 'too low');
});
