import { mapDispatchToProps, handlers } from './ThemesTabContainer';

describe('Given the mapDispatchToProps function', () => {
  it('should return an object with mapped actions', () => {
    expect(Object.keys(mapDispatchToProps(jest.fn()))).toEqual(['setTheme']);
  });
});

describe('Given the handlers object', () => {
  const handlerContext = {
    setTheme: jest.fn()
  };
  it('should call fetchLeagues in handlers', () => {
    handlers.themesTabItemClick(handlerContext)('light');
    expect(handlerContext.setTheme).toHaveBeenCalled();
  });
});
