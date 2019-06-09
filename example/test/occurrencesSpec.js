/* globals describe, it, assert, expect, countOccurrences */

describe('countOccurrences', function () {
  it('finds a single occurrence in the middle', function () {
    expect(countOccurrences('one two three', 'two')).to.equal(1)
  })

  it('finds occurrences at the string boundary', function () {
    countOccurrences('one two one', 'one').should.equal(2)
  })

  it('finds occurrences next to each other', function () {
    assert.equal(2, countOccurrences('oneone', 'one'))
  })

  it('do not count intersections', function () {
    assert.equal(1, countOccurrences('oneoneo', 'oneo'))
  })

  it('detects no occurrence', function () {
    assert.equal(0, countOccurrences('one', 'two'))
  })
})