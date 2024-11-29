import { numericalDisplay } from '../../src/utils';

const testNumber = 12345.12345
const testNumber2 = 123.12345

describe('NumberHelper', () => {
  describe('#numericalDisplay', () => {
    it('given a number returns a readable, formatted string', () => {
      expect(numericalDisplay(testNumber)).toBe('12,345.12')
      expect(numericalDisplay(testNumber2)).toBe('123.12')
    })
  })
})