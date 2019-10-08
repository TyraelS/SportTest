import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SideMenuItemWrapper from './SideMenuItemWrapper.style';

export const sideMenuItemClick = (id, sportItemClick) => () => {
  sportItemClick(id);
};

export default class SideMenuItem extends PureComponent {
  render() {
    const { id, handler, active, children } = this.props;
    return (
      <SideMenuItemWrapper
        onClick={sideMenuItemClick(id, handler)}
        active={active}
      >
        {children}
      </SideMenuItemWrapper>
    );
  }
}

SideMenuItem.displayName = 'SideMenuItem';
SideMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
