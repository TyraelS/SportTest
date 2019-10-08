import React from 'react';
import PropTypes from 'prop-types';

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
LeagueTab.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default LeagueTab;
