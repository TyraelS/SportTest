import styled from 'styled-components';

const SideMenuItem = styled.div`
  cursor: pointer;
  width: 300px;
  height: 50px;
  line-height: 50px;
  ${props =>
    props.active
      ? `background-color: #bebebe;
    color: #fff;`
      : `background-color: #cecece;
    color: #fff;`}
`;

export default SideMenuItem;
