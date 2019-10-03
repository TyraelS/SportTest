import { fetchData, fetchOnMount, handleShowEvents } from './SideMenuContainer';

jest.useFakeTimers();

describe('Given the SideMenuContainer', () => {
  let props = {
    fetchSports: jest.fn(),
    currentSportId: null,
    fetchLeagues: jest.fn(),
    setSportsTimestamp: jest.fn(),
    setLeaguesTimestamp: jest.fn()
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('given the fetchData function', () => {
    describe('and props are provided with currentSportId is falsy to fetchData', () => {
      it('should not call fetchLeagues', () => {
        fetchData(props);
        expect(props.fetchLeagues).not.toHaveBeenCalled();
      });
    });
    describe('and props are provided with currentSportId = truthy to fetchData', () => {
      it('should call fetchLeagues', () => {
        props = {
          ...props,
          currentSportId: 1
        };
        fetchData(props);
        expect(props.fetchLeagues).toHaveBeenCalled();
      });
    });
  });
  describe('given the fetchOnMount constant with ComponentDidMount hook', () => {
    const context = {
      props
    };
    it('calls setInterval', () => {
      fetchOnMount.componentDidMount.call(context);
      jest.runOnlyPendingTimers();
      expect(context.props.setSportsTimestamp).toHaveBeenCalledTimes(2);
    });
  });
  describe('given a handleShowEvents handler', () => {
    const event = {
      target: {
        id: 1
      }
    };
    const handlerContext = {
      setCurrentSportId: jest.fn(),
      fetchLeagues: jest.fn(),
      setLeaguesTimestamp: jest.fn()
    };
    it('should call fetchLeagues in handleShowEvents', () => {
      handleShowEvents.sportItemClick(handlerContext)(event);
      expect(handlerContext.fetchLeagues).toHaveBeenCalled();
    });
  });
});
