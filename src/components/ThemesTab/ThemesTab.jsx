import React from 'react';
import PropTypes from 'prop-types';

import ThemesTabWrapper from './ThemesTabWrapper.style';
import ThemesTabItem from 'components/ThemesTabItem';
import * as themes from 'themes';

const ThemesTab = ({ themesTabItemClick }) => (
  <ThemesTabWrapper>
    <span>Choose a theme</span>
    {Object.keys(themes).map(id => (
      <ThemesTabItem key={id} id={id} handler={themesTabItemClick} />
    ))}
  </ThemesTabWrapper>
);

ThemesTab.displayName = 'ThemesTab';
ThemesTab.propTypes = {
  themesTabItemClick: PropTypes.func.isRequired
};

export default ThemesTab;
