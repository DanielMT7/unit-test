const division = require('../division')

describe('Checking exceptions', () => {
  it('should throw an expection', () => {
    expect(() => {
      division(25, 0)
    }).toThrow()
  })

  it('should not throw an expection', () => {
    expect(() => {
      division(25, 2)
    }).not.toThrow()
  })
})
