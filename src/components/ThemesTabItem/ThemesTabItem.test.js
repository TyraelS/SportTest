import React from 'react';
import { shallow } from 'enzyme';

import ThemesTabItem from './ThemesTabItem';

describe('Given the ThemesTabItem component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<ThemesTabItem id={'1'} handler={jest.fn()} />);
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
