import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Given the App component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<App theme={'light'} />);

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
