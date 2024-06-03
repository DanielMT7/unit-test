const users = require('../users')

describe('Checking items of array', () => {
  it('should check if the array contains the user Maria', () => {
    expect(users).toContain('Maria')
  })

  it('should check if the array does not contain the user Daniel', () => {
    expect(users).not.toContain('Daniel')
  })
})
