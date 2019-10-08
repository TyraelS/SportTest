import React from 'react';

import ThemesTabStyle from './ThemesTabStyle';
import ThemesTabItem from 'components/ThemesTabItem';
import * as themes from 'themes';

const displayName = 'ThemesTab';

const ThemesTab = ({ themesTabItemClick }) => {
  return (
    <ThemesTabStyle>
      <span>Choose a theme</span>
      {Object.keys(themes).map(id => (
        <ThemesTabItem key={id} id={id} handler={themesTabItemClick} />
      ))}
    </ThemesTabStyle>
  );
};

ThemesTab.displayName = displayName;

export default ThemesTab;
