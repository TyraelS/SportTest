import React from 'react';

import ThemesTabItemWrapper from './ThemesTabItemWrapper.style';

const tabsItemClick = (id, themesTabItemClick) => () => {
  themesTabItemClick(id);
};

const ThemesTabItem = ({ id, handler }) => (
  <ThemesTabItemWrapper id={id} onClick={tabsItemClick(id, handler)}>
    {id.toUpperCase()}
  </ThemesTabItemWrapper>
);
ThemesTabItem.displayName = 'ThemesTabItem';

export default ThemesTabItem;
