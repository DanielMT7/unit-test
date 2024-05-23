const areaOfSquare = require('../index')

// toBe

describe('Calculate area of square', () => {
  // pode usar it ou test
  it('passed the value 3, it should return 9', () => {
    expect(areaOfSquare(3)).toBe(9)
  })
  it('passed the value 17, it should return 289', () => {
    expect(areaOfSquare(17)).toBe(289)
  })
  it('passed the value 4, it should return 16', () => {
    expect(areaOfSquare(4)).toBe(16)
  })
})
