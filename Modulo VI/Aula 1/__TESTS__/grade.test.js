const average = require('../grade')

describe('Checking student grades', () => {
  let gradeOne
  let gradeTwo
  let gradeTree

  beforeAll(() => {
    gradeOne = 4
    gradeTwo = 8
    gradeTree = 7
  })

  // In this case we have only 2 test and after the first test all grades will change
  afterEach(() => {
    gradeOne = 3
    gradeTwo = 5
    gradeTree = 4
  })

  it('should check if the average of the grades 4, 8 and 7 is greater than 6', () => {
    expect(average(gradeOne, gradeTwo, gradeTree)).toBeGreaterThanOrEqual(6)
  })

  it('should check if the average of the grades 3, 5 and 4 is greater than 6', () => {
    expect(average(gradeOne, gradeTwo, gradeTree)).toBeLessThanOrEqual(6)
  })
})
