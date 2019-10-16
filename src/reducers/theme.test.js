import themeReducer, { setTheme, SET_THEME } from 'reducers/theme';

describe('Given the theme reducer', () => {
  describe('given the setTheme action creator', () => {
    it('should return an action with SET_SPORTS_TIMESTAMP and payload with provided time', () => {
      expect(setTheme('light')).toEqual({
        type: SET_THEME,
        payload: 'light'
      });
    });
  });
  describe('and state with action are not provided', () => {
    it('should return a default theme', () => {
      expect(themeReducer()).toBe('light');
    });
    describe('and localStorage has theme property', () => {
      it('should take a value of localStorage and write it to initial state', () => {
        const localStorageMock = (function() {
          return {
            getItem: () => 'dark'
          };
        })();
        Object.defineProperty(window, 'localStorage', {
          value: localStorageMock
        });
        expect(themeReducer()).toBe('dark');
      });
    });
  });
  describe('and setTheme action is provided', () => {
    it('should return a theme provided in action payload', () => {
      expect(themeReducer(null, { type: SET_THEME, payload: 'dark' })).toBe(
        'dark'
      );
    });
  });
});
