import { Map } from 'immutable';

export default function convertNativeToMap(data) {
  return Map(data.map(item => [item.id, Map(item)]));
}
