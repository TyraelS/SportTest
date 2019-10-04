import React from 'react';

import ThemesTabItemStyle from './ThemesTabItemStyle';

const displayName = 'ThemesTabItem';

const ThemesTabItem = ({ id, handler }) => {
  return (
    <ThemesTabItemStyle id={id} onClick={handler}>
      {id.toUpperCase()}
    </ThemesTabItemStyle>
  );
};

ThemesTabItem.displayName = displayName;

export default ThemesTabItem;
