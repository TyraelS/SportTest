import React from 'react';

import ThemesTabItemStyle from './ThemesTabItemStyle';

const displayName = 'ThemesTabItem';

const tabsItemClick = (id, themesTabItemClick) => () => {
  themesTabItemClick(id);
};

const ThemesTabItem = ({ id, handler }) => {
  return (
    <ThemesTabItemStyle id={id} onClick={tabsItemClick(id, handler)}>
      {id.toUpperCase()}
    </ThemesTabItemStyle>
  );
};

ThemesTabItem.displayName = displayName;

export default ThemesTabItem;
