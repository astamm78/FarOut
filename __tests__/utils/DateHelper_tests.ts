import { apiString, displayString } from '../../src/utils';

const testDateString = '2023-10-05T14:48:00.000Z';
const testDate = new Date(Date.parse(testDateString));

describe('DateHelper', () => {
  describe('#apiString', () => {
    it('given a date returns a correctly formatted string', () => {
      expect(apiString(testDate)).toBe('2023-10-05');
    });
  })

  describe('#dateString', () => {
    it('given a date returns a correctly formatted string', () => {
      expect(displayString(testDate)).toBe('Thursday, October 5, 2023');
    })
  })
});
