import { NearEarthObject } from '../../src/models';

const testObject = new NearEarthObject(
  '999',
  'Test Object',
  90,
  110,
  '120',
  '900',
  false
)

describe('NearEarthObject', () => {
  describe('#estimatedDiameterDescription', () => {
    it('returns a display string for estimated diameter', () => {
      expect(testObject.estimatedDiameterDescription()).toBe(`Between 90 and 110 feet.`)
    })
  })

  describe('#relativeVelocityMPHDescription', () => {
    it('returns a display string for relative velocity', () => {
      expect(testObject.relativeVelocityMPHDescription()).toBe('Traveling at 120 mph.')
    })
  })

  describe('#missDistanceDescription', () => {
    it('returns a display string for miss distance', () => {
      expect(testObject.missDistanceDescription()).toBe('Missing the Earth by 900 miles.')
    })
  })

  describe('potentialHazerdDescription', () => {
    it('returns the correct string based on #potentiallyHazerdous', () => {
      expect(testObject.potentialHazerdDescription()).toBe('Not a potential hazard.')
      
      testObject.potentiallyHazerdous = true;
      expect(testObject.potentialHazerdDescription()).toBe('Potentially hazerdous!')
    })
  })
})
