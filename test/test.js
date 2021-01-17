const assert = require('assert')
const { expect } = require('chai')

describe('smoke test', () => {
  it('should assert check equality work', function () {
    assert.equal(true, true)
  })

  it('should expect checkk equality work', () => {
    expect(true).to.be.true
    expect({ a: 1 }).to.not.have.property('b')
    expect([1, 2]).to.be.an('array').that.does.not.include(3)
  })
})
