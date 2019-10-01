import { getSideMenuStyles } from './SideMenuItem';

describe('Given the getSideMenuStyles function', () => {
  let props = {
    active: true
  };
  beforeEach(() => {
    res = getSideMenuStyles(props);
  });
  let res;
  describe('and active prop is set to true', () => {
    it('should match the styles for active item', () => {
      expect(res).toBe(`background-color: #bebebe; color: #fff;`);
      props = {
        active: false
      };
    });
  });
  describe('and active prop is set to false', () => {
    it('should match the styles for regular item', () => {
      expect(res).toBe(`background-color: #cecece; color: #fff;`);
    });
  });
});
