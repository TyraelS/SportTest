import styled from 'styled-components';

const LeagueTabsWrapper = styled.div`
  width: 65%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  color: ${props => props.theme.textLeagues};
  background-color: ${props => props.theme.leaguesItemEven};
  > div {
    border: 1px solid ${props => props.theme.leaguesItemBorder};
    border-bottom: none;
    &:last-child {
      border-bottom: 1px solid ${props => props.theme.leaguesItemBorder};
    }
  }
  > div:nth-child(odd) {
    background-color: ${props => props.theme.leaguesItemOdd};
  }
`;

export default LeagueTabsWrapper;
