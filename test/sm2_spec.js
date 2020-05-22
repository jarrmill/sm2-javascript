const { assert } = require('chai');
const sm2 = require('../index');

describe('sm2', () => {
  it('should successfully calculate interval, repetitions, easeFactor', () => {
    const quality = 0;
    const previousEaseFactor = 0;
    const repetitions = 0;
    const previousInterval = 2.5;

    const actual = sm2(quality, repetitions, previousEaseFactor, previousInterval);
    assert.equal(actual.interval, 1);
    assert.equal(actual.repetitions, 0);
    assert.equal(actual.easeFactor, 1.3);
  });
});
