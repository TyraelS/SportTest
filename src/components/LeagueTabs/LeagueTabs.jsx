import React from 'react';

import LeagueTabsWrapper from './LeagueTabsWrapper.style';
import LeagueTab from 'components/LeagueTab';

const LeagueTabs = ({ leagues }) => {
  return (
    <LeagueTabsWrapper>
      {leagues.entrySeq().map(([key, league]) => (
        <LeagueTab
          key={key}
          name={league.get('name', '')}
          country={league.get('countryCode', '')}
        >
          {league.get('name', '')}
        </LeagueTab>
      ))}
    </LeagueTabsWrapper>
  );
};

LeagueTabs.displayName = 'LeagueTabs';

export default LeagueTabs;
