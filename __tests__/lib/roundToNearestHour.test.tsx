import {roundToNearestHour} from '@core/lib/roundToNearestHour';
import 'react-native';

test('function roundToNearestHour test', () => {
  let dateTime = '2022-12-02 12:31';
  let result = roundToNearestHour(dateTime);
  expect(result).toBe('2022-12-02 13:00');

  dateTime = '2022-12-02 02:22';
  result = roundToNearestHour(dateTime);
  expect(result).toBe('2022-12-02 02:00');

  dateTime = '2022-12-02 23:40';
  result = roundToNearestHour(dateTime);
  expect(result).toBe('2022-12-03 00:00');
});
