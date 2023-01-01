const { add } = require('../index')

describe('Test index', () => {
  test('Add', () => {
    expect(add(1,2)).toBe(3)
  })
})