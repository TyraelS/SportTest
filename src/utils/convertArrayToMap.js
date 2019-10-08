import { Map } from 'immutable';

export default function convertArrayToMap(data) {
  return Map(data.map(item => [item.id, Map(item)]));
}
