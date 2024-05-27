const PersonFactory = require('../person_factory')

var factory = new PersonFactory()

describe('Factory of Person', () => {
  it('not passing the parameter should return null', () => {
    expect(factory.getPerson()).toBeNull()
  })
  it('passed the invalid parameter admin should return null', () => {
    expect(factory.getPerson('admin')).toBeNull()
  })
})
