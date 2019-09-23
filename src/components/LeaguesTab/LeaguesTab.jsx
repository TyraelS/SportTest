import React from 'react';

import LeaguesTabStyle from './LeaguesTabStyle';
import LeaguesTabItem from '../LeaguesTabItem';

const displayName = 'LeaguesTab';

export default function LeaguesTab({ leagues }) {
  console.log('Leagues are:', leagues);
  return (
    <LeaguesTabStyle>
      {leagues.toJS().map(item => (
        <LeaguesTabItem
          key={item.id}
          name={item.name}
          country={item.countryCode}
        >
          {item.name}
        </LeaguesTabItem>
      ))}
    </LeaguesTabStyle>
  );
}

LeaguesTab.displayName = displayName;
