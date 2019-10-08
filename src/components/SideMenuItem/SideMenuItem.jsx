import React, { PureComponent } from 'react';

import SideMenuItemWrapper from './SideMenuItemWrapper';

const sideMenuItemClick = (id, sportItemClick) => () => {
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
