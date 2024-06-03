const average = require('../grade')

describe('Checking student grades', () => {
  it('should check if the average of the grades 4, 5 and 6 is 4.33', () => {
    expect(average(4, 3, 6)).toBeCloseTo(4.33)
  })

  it('should check if the average of the grades 5, 5 and 6 is 5.3', () => {
    expect(average(5, 5, 6)).toBeCloseTo(5.3, 1)
  })
})
