import { getSideMenuStyles } from './SideMenuItem';

describe('Given the getSideMenuStyles function', () => {
  const props = {
    active: true
  };
  describe('and active prop is set to true', () => {
    const res = getSideMenuStyles(props);
    it('should match the styles for active item', () => {
      expect(res).toBe(`background-color: #bebebe; color: #fff;`);
    });
  });
  props.active = false;
  describe('and active prop is set to false', () => {
    const res = getSideMenuStyles(props);
    it('should match the styles for regular item', () => {
      expect(res).toBe(`background-color: #cecece; color: #fff;`);
    });
  });
});
