import React from 'react';

import SideMenuWrapper from './SideMenuWrapper.style';
import SideMenuItem from 'components/SideMenuItem/';

const SideMenu = ({ sports, sportItemClick, categoryId }) => {
  return (
    <SideMenuWrapper>
      {sports.entrySeq().map(([key, val]) => (
        <SideMenuItem
          key={key}
          id={val.get('id', '')}
          handler={sportItemClick}
          active={val.get('id', '') === categoryId}
        >
          {`${val.get('name')} - ${val.get('counter')}`}
        </SideMenuItem>
      ))}
    </SideMenuWrapper>
  );
};

SideMenu.displayName = 'SideMenu';

export default SideMenu;
