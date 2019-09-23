import React from 'react';
import SideMenuStyle from './SideMenuStyle';
import SideMenuItem from '../SideMenuItem/';

const displayName = 'SideMenu';

export default function SideMenu({ sports, handleShowEvents }) {
  console.log('Current props:', sports.toJS());
  return (
    <SideMenuStyle>
      render time = {new Date().toLocaleTimeString()}
      {sports
        ? sports.map(item => (
            <SideMenuItem key={item.id} id={item.id} onClick={handleShowEvents}>
              {item.name}
            </SideMenuItem>
          ))
        : 'Smth went wrong'}
    </SideMenuStyle>
  );
}

SideMenu.displayName = displayName;
