import React from 'react';
import { shallow } from 'enzyme';
import ThemesTab from './ThemesTab';

describe('Given the ThemesTab component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<ThemesTab themesTabItemClick={jest.fn()} />);
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
