import React from 'react';

import LeaguesTabStyle from './LeaguesTabStyle';
import LeaguesTabItem from 'Components/LeaguesTabItem';

const displayName = 'LeaguesTab';

const LeaguesTab = ({ leagues }) => {
  return (
    <LeaguesTabStyle>
      {leagues.entrySeq().map(([key, val]) => (
        <LeaguesTabItem
          key={key}
          name={val.get('name', '')}
          country={val.get('countryCode', '')}
        >
          {val.get('name', '')}
        </LeaguesTabItem>
      ))}
    </LeaguesTabStyle>
  );
};

LeaguesTab.displayName = displayName;

export default LeaguesTab;
