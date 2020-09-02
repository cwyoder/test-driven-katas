const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('returns a string', () => {
    expect(typeof wrap('buzz', 7)).to.equal('string');
  });

  it('returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('returns original string if maximum length is less than maxLen', () => {
    expect(wrap('abc def', 8)).to.equal('abc def');
  });

  it('expects string to contain linebreak', () => {
    expect(wrap('abc def', 4)).to.contain('\n');
  });

  it('expects length of first line to equal or less than maximum length', () => {
    const len = 6;
    const returned = wrap('ramen yakuza super hot dog', len);
    const firstLine = returned.split('\n')[0];

    expect(firstLine).to.have.lengthOf.below(len);
  });
});
