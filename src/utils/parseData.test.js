import parseData from './parseData';
import { Response } from 'whatwg-fetch';

describe('Given the parseData function', () => {
  describe('and payload and alive prop are provided', () => {
    const values = { testProp: 'value' };
    const payload = new Response(JSON.stringify(values));
    console.log(payload);
    const alive = true;
    let res = parseData(payload, alive);
    it('should return a javascript object with provided payload and alive prop', async () => {
      values.alive = alive;
      await expect(res).resolves.toEqual(values);
    });
  });
});
