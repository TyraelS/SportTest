import React from 'react';

import LeaguesTabStyle from './LeaguesTabStyle';
import LeaguesTabItem from '../LeaguesTabItem';

const displayName = 'LeaguesTab';

export default function LeaguesTab({ leagues }) {
  const items = leagues.toJS();
  return (
    <LeaguesTabStyle>
      {Object.keys(items).map(key => (
        <LeaguesTabItem
          key={items[key].id}
          name={items[key].name}
          country={items[key].countryCode}
        >
          {items[key].name}
        </LeaguesTabItem>
      ))}
    </LeaguesTabStyle>
  );
}

LeaguesTab.displayName = displayName;
