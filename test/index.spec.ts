import { expect } from 'chai';

import delay from '../src';

describe('delay', () => {
  let val = 0;

  beforeEach(() => {
    val = 0;
  });

  it('delay 100ms', () => {
    delay(100).then(() => val = 1).then(() => expect(val).to.equal(1));

    expect(val).to.equal(0);
  })
})
