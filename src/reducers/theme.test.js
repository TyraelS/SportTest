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
  });
  describe('and setTheme action is provided', () => {
    it('should return a theme provided in action payload', () => {
      expect(themeReducer(null, { type: SET_THEME, payload: 'dark' })).toBe(
        'dark'
      );
    });
  });
});
