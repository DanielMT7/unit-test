const average = require('../grade')

describe('Checking student grades', () => {
  it('should return true for grades 6, 7 and 5', () => {
    expect(average(6, 7, 5)).toBeTruthy()
  })

  it('should return false for grades 3, 5, 4', () => {
    expect(average(3, 5, 4)).toBeFalsy()
  })
})
