import add from '@src/js/add.js'

describe('test add func', () => {
  test('1 add 2, return 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})
