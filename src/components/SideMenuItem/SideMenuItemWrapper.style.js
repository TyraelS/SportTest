import styled from 'styled-components';

const SideMenuItem = styled.div`
  cursor: pointer;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  ${props =>
    props.active ? `background-color: #bebebe;` : `background-color: #cecece;`}
`;

export default SideMenuItem;
