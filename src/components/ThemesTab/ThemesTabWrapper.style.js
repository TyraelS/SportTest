import styled from 'styled-components';

const ThemesTabWrapper = styled.div`
  display: flex;
  width: 10%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.regular};
  color: ${props => props.theme.textThemes};
  > span,
  > div {
    padding: 15px;
  }
`;

export default ThemesTabWrapper;
