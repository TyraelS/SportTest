import React from 'react';

import ThemesTabStyle from './ThemesTabStyle';
import ThemesTabItem from 'Components/ThemesTabItem';
import * as themes from 'Themes';

const displayName = 'ThemesTab';

const ThemesTab = ({ themesTabItemClick }) => {
  return (
    <ThemesTabStyle>
      <span>Choose a theme</span>
      {Object.keys(themes).map(item => (
        <ThemesTabItem key={item} id={item} handler={themesTabItemClick} />
      ))}
    </ThemesTabStyle>
  );
};

ThemesTab.displayName = displayName;

export default ThemesTab;