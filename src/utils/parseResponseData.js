import { Map } from 'immutable';
import { checkTimestamp } from 'Utils';

export const parseData = (res, alive) => {
  return res.text().then(json => ({
    ...JSON.parse(json),
    alive: alive
  }));
};

const parseResponseData = (responseType, timestamp) => (
  response,
  state,
  res
) => {
  const alive = checkTimestamp(
    state.get('responses', Map()).get(responseType, ''),
    timestamp
  );
  return parseData(res, alive);
};

export default parseResponseData;
