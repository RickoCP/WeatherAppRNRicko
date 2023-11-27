import {getResponse} from '@core/lib/getRequest';
import 'react-native';

test('function getResponse test', () => {
  let url = 'test';
  let result = getResponse(url);
  expect(result.url).toBe(url);

  url = 'test2';
  result = getResponse(url);
  expect(result.method).toBe('GET');
});
