const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', ()=> {
  it('returns an array', ()=> {
    expect(Array.isArray(twoSum([1,2,3], 3))).to.equal(true);
  });
  it('returns an array with two values', ()=> {
    expect(twoSum([1,2,3], 3).length).to.equal(2);
  });
  it('both of the values of the array of indexes should be less than the length of the original array', ()=> {
    const len = 3
    const returned = twoSum([1,2,3], len);
    expect(returned[0]).to.be.below(len);
    expect(returned[1]).to.be.below(len);
  });
})
