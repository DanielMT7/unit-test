const Product = require('../Product')

describe('Test on product information', () => {
  var product = new Product()

  it('should return that the stock property is undefined', () => {
    expect(product.stock).toBeUndefined()
  })

  product.description = 'Biscoito Trakinas'

  it('should return that the description is defined', () => {
    expect(product.description).toBeDefined()
  })
})
