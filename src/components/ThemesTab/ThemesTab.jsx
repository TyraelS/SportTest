import React from 'react';

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

export default ThemesTab;
