const users = require('../users')

describe('Checking items of array', () => {
  it('should check if the array contains all the items in another array', () => {
    let expectArray = ['José', 'Maria']
    expect(users).toEqual(expect.arrayContaining(expectArray))
  })
})
