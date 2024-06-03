const users = require('../users')

describe('Checking length of items of array', () => {
  it('should check if array has 3 items', () => {
    expect(users).toHaveLength(3)
  })

  it('should check if index item 3 is 4 characters wide', () => {
    expect(users[2]).toHaveLength(4)
  })
})
