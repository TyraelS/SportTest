import { Map } from 'immutable';
import { checkTimestamp, parseData } from 'Utils';

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
