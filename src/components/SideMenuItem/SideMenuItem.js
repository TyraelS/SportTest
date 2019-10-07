import styled from 'styled-components';

export const getSideMenuStyles = props =>
  props.active ? `background-color: #bebebe;` : `background-color: #cecece;`;

const SideMenuItem = styled.div`
  cursor: pointer;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  ${getSideMenuStyles}
`;

export default SideMenuItem;
