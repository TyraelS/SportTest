import React from 'react';

import LeaguesTabItemStyle from './LeaguesTabItemStyle';

const displayName = 'LeaguesTabItem';

export default function LeaguesTabItem({ name, country }) {
  return (
    <LeaguesTabItemStyle>
      <div>{name}</div>
      <div>{country}</div>
    </LeaguesTabItemStyle>
  );
}

LeaguesTabItem.displayName = displayName;
