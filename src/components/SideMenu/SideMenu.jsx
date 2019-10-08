import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import SideMenuWrapper from './SideMenuWrapper.style';
import SideMenuItem from 'components/SideMenuItem/';

const SideMenu = ({ sports, sportItemClick, categoryId }) => {
  return (
    <SideMenuWrapper>
      {sports.entrySeq().map(([key, val]) => (
        <SideMenuItem
          key={key}
          id={val.get('id', '')}
          handler={sportItemClick}
          active={val.get('id', '') === categoryId}
        >
          {`${val.get('name')} - ${val.get('counter')}`}
        </SideMenuItem>
      ))}
    </SideMenuWrapper>
  );
};

SideMenu.displayName = 'SideMenu';
SideMenu.propTypes = {
  sports: ImmutablePropTypes.map.isRequired,
  sportItemClick: PropTypes.func.isRequired,
  categoryId: PropTypes.string
};
SideMenu.defaultProps = {
  categoryId: null
};

export default SideMenu;
