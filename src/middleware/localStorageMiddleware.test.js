import { SET_THEME } from 'reducers/theme';

import localStorageMiddleware from './localStorageMiddleware';

describe('Given the localStorageMiddleware', () => {
  const localStorageMock = (function() {
    return {
      getItem: jest.fn(),
      setItem: jest.fn()
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  const mockedFunction = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('and SET_THEME action is provided', () => {
    it('should call setItem of localStorage', () => {
      localStorageMiddleware()(mockedFunction)({
        type: SET_THEME,
        payload: 'light'
      });
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });
  });
  describe('and action type is unknown', () => {
    it('should call provided mock function and should not call setItem', () => {
      const mockAction = { type: 'Different', payload: 'light' };
      localStorageMiddleware()(mockedFunction)(mockAction);
      expect(mockedFunction).toHaveBeenCalledWith(mockAction);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });
});
