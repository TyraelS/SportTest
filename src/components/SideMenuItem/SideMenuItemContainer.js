import { compose, setDisplayName, pure } from 'recompose';

import SideMenuItem from './SideMenuItem';

const enhance = compose(
  setDisplayName('SideMenuItemContainer'),
  pure
);

export default enhance(SideMenuItem);
