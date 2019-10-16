import React from 'react';
import { shallow } from 'enzyme';

import ThemesTabItem, { tabsItemClick } from './ThemesTabItem';

describe('Given the ThemesTabItem component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<ThemesTabItem id={'1'} handler={jest.fn()} />);
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

describe('Given the tabsItemClick function', () => {
  it('should call provided function with id', () => {
    const mock = jest.fn();
    tabsItemClick(1, mock)();
    expect(mock).toHaveBeenCalledWith(1);
  });
});
