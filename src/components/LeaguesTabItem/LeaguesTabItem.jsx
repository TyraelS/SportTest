import React from 'react';

import LeaguesTabItemStyle from './LeaguesTabItemStyle';

const displayName = 'LeaguesTabItem';

const LeaguesTabItem = ({ name, country }) => {
  return (
    <LeaguesTabItemStyle>
      <div>{name}</div>
      <div>{country}</div>
    </LeaguesTabItemStyle>
  );
};

LeaguesTabItem.displayName = displayName;

export default LeaguesTabItem;
