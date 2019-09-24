import React from 'react';
import SideMenuStyle from './SideMenuStyle';
import SideMenuItem from '../SideMenuItem/';

const displayName = 'SideMenu';

export default function SideMenu({ sports, handleShowEvents, currentSportId }) {
  console.log('Current props:', sports.toJS());
  return (
    <SideMenuStyle>
      render time = {new Date().toLocaleTimeString()}
      {sports
        ? sports.map(item => {
            let active = false;
            if (item.id === currentSportId) active = true;
            return (
              <SideMenuItem
                key={item.id}
                id={item.id}
                onClick={handleShowEvents}
                active={active}
              >
                {item.name}
              </SideMenuItem>
            );
          })
        : 'Smth went wrong'}
    </SideMenuStyle>
  );
}

SideMenu.displayName = displayName;
