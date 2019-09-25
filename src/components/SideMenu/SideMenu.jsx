import React from 'react';
import SideMenuStyle from './SideMenuStyle';
import SideMenuItem from '../SideMenuItem/';

const displayName = 'SideMenu';

export default function SideMenu({ sports, handleShowEvents, currentSportId }) {
  const items = sports.toJS();
  return (
    <SideMenuStyle>
      render time = {new Date().toLocaleTimeString()}
      {sports
        ? Object.keys(items).map(key => {
            let active = false;
            if (items[key].id === currentSportId) active = true;
            return (
              <SideMenuItem
                key={items[key].id}
                id={items[key].id}
                onClick={handleShowEvents}
                active={active}
              >
                {items[key].name}
              </SideMenuItem>
            );
          })
        : 'Smth went wrong'}
    </SideMenuStyle>
  );
}

SideMenu.displayName = displayName;
