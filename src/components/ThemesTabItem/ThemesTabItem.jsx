import React from 'react';
import PropTypes from 'prop-types';

import ThemesTabItemWrapper from './ThemesTabItemWrapper.style';

export const tabsItemClick = (id, themesTabItemClick) => () => {
  themesTabItemClick(id);
};

const ThemesTabItem = ({ id, handler }) => (
  <ThemesTabItemWrapper id={id} onClick={tabsItemClick(id, handler)}>
    {id.toUpperCase()}
  </ThemesTabItemWrapper>
);
ThemesTabItem.displayName = 'ThemesTabItem';
ThemesTabItem.propTypes = {
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default ThemesTabItem;
