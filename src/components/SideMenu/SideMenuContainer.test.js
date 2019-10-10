import { Map } from 'immutable';

import {
  mapStateToProps,
  mapDispatchToProps,
  fetchData,
  lifecycles,
  handlers
} from './SideMenuContainer';

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
  describe('given the mapStateToProps function', () => {
    it('should return an object with sports field of immutable Map type', () => {
      expect(mapStateToProps(Map()).sports).toBeInstanceOf(Map);
    });
  });
  describe('given the mapDispatchToProps function', () => {
    it('should return an object with mapped actions', () => {
      expect(Object.keys(mapDispatchToProps(jest.fn))).toEqual([
        'fetchSports',
        'fetchLeagues',
        'setSportsTimestamp',
        'setLeaguesTimestamp'
      ]);
    });
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

  describe('given the lifecycles constant with lifecycle hooks', () => {
    const hooks = lifecycles();
    describe('when componentDidMount is called', () => {
      it('should call setInterval', () => {
        hooks.componentDidMount.call({ props });
        jest.runOnlyPendingTimers();
        expect(props.setSportsTimestamp).toHaveBeenCalledTimes(2);
      });
    });
    describe('when componentWillUnmount is called', () => {
      it('should delete the timer', () => {
        hooks.componentWillUnmount();
        expect(hooks.timer).toBe(null);
      });
    });
  });

  describe('given a handlers const', () => {
    const handlerContext = {
      setCategoryId: jest.fn(),
      fetchLeagues: jest.fn(),
      setLeaguesTimestamp: jest.fn()
    };

    it('should call fetchLeagues in handlers', () => {
      handlers.sportItemClick(handlerContext)('SBTC_01');
      expect(handlerContext.fetchLeagues).toHaveBeenCalled();
    });
  });
});
