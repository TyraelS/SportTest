import React from 'react';

import SideMenuStyle from './SideMenuStyle';
import SideMenuItem from 'Components/SideMenuItem/';

const displayName = 'SideMenu';

const SideMenu = ({ sports, sportItemClick, currentSportId }) => {
  return (
    <SideMenuStyle>
      {sports
        ? sports.entrySeq().map(([key, val]) => (
            <SideMenuItem
              key={key}
              id={val.get('id', '')}
              onClick={sportItemClick}
              active={val.get('id', '') === currentSportId}
            >
              {val.get('name', '')} - {val.get('counter', '')}
            </SideMenuItem>
          ))
        : 'Smth went really wrong'}
    </SideMenuStyle>
  );
};

SideMenu.displayName = displayName;

export default SideMenu;
