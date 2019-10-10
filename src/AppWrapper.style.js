import styled from 'styled-components';

const AppWrapper = styled.div`
  user-select: none;
  max-width: 2200px;
  display: flex;
  & * {
    box-sizing: border-box;
  }
`;

export default AppWrapper;
