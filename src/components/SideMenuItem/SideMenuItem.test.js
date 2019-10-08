import { getSideMenuStyles } from './SideMenuItemWrapper';

describe('Given the getSideMenuStyles function', () => {
  let props = {
    active: true
  };

  let res;

  describe('and element is active', () => {
    it('should match the background-color style', () => {
      res = getSideMenuStyles(props);
      expect(res).toBe(`background-color: #bebebe;`);
    });
  });

  describe('and element is not active', () => {
    it('should match the background-color style', () => {
      props = {
        active: false
      };
      res = getSideMenuStyles(props);
      expect(res).toBe(`background-color: #cecece;`);
    });
  });
});
