import React from 'react';
import { shallow } from 'enzyme';

import SideMenuItem, { sideMenuItemClick } from './SideMenuItem';

describe('Given the sideMenuItemClick function', () => {
  const mockFunction = jest.fn();
  it('should call passed function with provided id', () => {
    sideMenuItemClick('1', mockFunction)();
    expect(mockFunction).toHaveBeenCalledWith('1');
  });
});

describe('Given the SideMenuItem component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(
      <SideMenuItem id='1' handler={jest.fn()} active={true} children='text' />
    );
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
