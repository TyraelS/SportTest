import styled from 'styled-components';

const SideMenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: ${props => props.theme.textSports};
  background-color: ${props =>
    props.active ? props.theme.accent : props.theme.regular};
`;

export default SideMenuItem;
