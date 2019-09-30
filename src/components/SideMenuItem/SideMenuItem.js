import styled from 'styled-components';

const getSideMenuStyles = props =>
  props.active
    ? `background-color: #bebebe;
  color: #fff;`
    : `background-color: #cecece;
  color: #fff;`;

const SideMenuItem = styled.div`
  cursor: pointer;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  ${getSideMenuStyles}
`;

export default SideMenuItem;
