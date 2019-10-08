export default function getHeaders(value) {
  return {
    'client-app-version': '1.2.17test',
    'client-id': 'web',
    'client-language': 'en',
    'client-os-version': 'default',
    ...value
  };
}
