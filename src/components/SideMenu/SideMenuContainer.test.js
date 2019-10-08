import { fetchData, lifecycles, handlers } from './SideMenuContainer';

jest.useFakeTimers();

describe('Given the SideMenuContainer', () => {
  let props = {
    fetchSports: jest.fn(),
    categoryId: null,
    fetchLeagues: jest.fn(),
    setSportsTimestamp: jest.fn(),
    setLeaguesTimestamp: jest.fn()
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('given the fetchData function', () => {
    describe('and props are provided with categoryId is falsy', () => {
      it('should not call fetchLeagues', () => {
        fetchData(props);
        expect(props.fetchLeagues).not.toHaveBeenCalled();
      });
    });

    describe('and props are provided with categoryId is truthy', () => {
      it('should call fetchLeagues', () => {
        props = {
          ...props,
          categoryId: 1
        };
        fetchData(props);
        expect(props.fetchLeagues).toHaveBeenCalled();
      });
    });
  });

  describe('given the lifecycles constant with ComponentDidMount hook', () => {
    it('should call setInterval', () => {
      lifecycles().componentDidMount.call({ props });
      jest.runOnlyPendingTimers();
      expect(props.setSportsTimestamp).toHaveBeenCalledTimes(2);
    });
  });

  describe('given a handlers const', () => {
    const event = {
      target: {
        id: 1
      }
    };
    const handlerContext = {
      setCategoryId: jest.fn(),
      fetchLeagues: jest.fn(),
      setLeaguesTimestamp: jest.fn()
    };

    it('should call fetchLeagues in handlers', () => {
      handlers.sportItemClick(handlerContext)(event);
      expect(handlerContext.fetchLeagues).toHaveBeenCalled();
    });
  });
});
