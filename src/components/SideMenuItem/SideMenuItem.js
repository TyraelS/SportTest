import styled from 'styled-components';

export const getSideMenuStyles = props =>
  props.active
    ? `background-color: ${props.theme.sportsItemAccent}`
    : `background-color: ${props.theme.sportsItemRegular}`;

const SideMenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: ${props => props.theme.textSports};
  ${getSideMenuStyles}
`;

export default SideMenuItem;
