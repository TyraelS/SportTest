import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
LeagueTabs.propTypes = {
  leagues: ImmutablePropTypes.map.isRequired
};

export default LeagueTabs;
