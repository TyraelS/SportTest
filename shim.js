global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

Object.values = Object.values || (obj => Object.keys(obj).map(key => obj[key]));
Object.entries =
  Object.entries || (obj => Object.keys(obj).map(key => [key, obj[key]]));

global.localStorage = { setItem: jest.fn(), getItem: jest.fn() };
global.fetch = () => {};
