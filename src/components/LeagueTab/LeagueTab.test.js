import React from 'react';
import { shallow } from 'enzyme';
import LeagueTab from './LeagueTab';

describe('Given the LeagueTab component with provided props', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<LeagueTab name='Test name' country='GBR' />);

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
