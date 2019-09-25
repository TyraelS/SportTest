import { Map, fromJS } from 'immutable';

export default function convertData(data) {
  return Map(fromJS(data).map(item => [item.get('id'), item]));
}
