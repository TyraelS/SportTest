import { Map } from 'immutable';

import convertNativeToMap from './convertNativeToMap';

describe('Given the convertNativeToMap function', () => {
  const data = [
    {
      id: 'SBTC_01',
      name: 'Football',
      sportId: '14'
    },
    {
      id: 'SBTC_02',
      name: 'Volleyball',
      sportId: '1'
    }
  ];
  describe('and the data array is provided', () => {
    const res = convertNativeToMap(data);
    it('should be the instance of Immutable.Map', () => {
      expect(res).toBeInstanceOf(Map);
    });

    it('should have an id as key', () => {
      expect(res.has(data[0].id)).toBeTruthy();
    });

    it('should have children as Immutable.Map', () => {
      expect(res.get('SBTC_01', Map())).toBeInstanceOf(Map);
    });
  });
});
