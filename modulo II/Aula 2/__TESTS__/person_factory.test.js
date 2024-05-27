const { Client, Employee } = require('../person')
const PersonFactory = require('../person_factory')

var factory = new PersonFactory()

describe('Factory of Persons', () => {
  it('passed a string with the client value, it should return a new client object', () => {
    expect(factory.getPerson('client')).toBeInstanceOf(Client)
  })
  it('passed a string with the employee value, it should return a new employee object', () => {
    expect(factory.getPerson('employee')).toBeInstanceOf(Employee)
  })
})
