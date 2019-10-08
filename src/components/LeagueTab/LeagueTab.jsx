import React from 'react';

import LeagueTabWrapper from './LeagueTabWrapper.style';

const LeagueTab = ({ name, country }) => {
  return (
    <LeagueTabWrapper>
      <div>{name}</div>
      <div>{country}</div>
    </LeagueTabWrapper>
  );
};

LeagueTab.displayName = 'LeagueTab';

export default LeagueTab;
