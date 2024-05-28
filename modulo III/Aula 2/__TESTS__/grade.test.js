const average = require('../grade')

describe('Checking student grades', () => {
  it('should check if the average of the grades 4, 3 and 8 is less than 6', () => {
    expect(average(4, 3, 8)).toBeLessThan(6)
  })

  it('should check if the average of the grades 6, 6 and 6 is less or equal than 6', () => {
    expect(average(6, 6, 6)).toBeLessThanOrEqual(6)
  })
})
