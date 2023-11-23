import {Day, Night} from '@core/initialData/initialData';
import {getDayOrNight} from '@core/lib/getDayOrNight';
import 'react-native';

test('function getDayOrNight test', () => {
  let dateTime = '2022-12-02 12:00';
  let result = getDayOrNight(dateTime);
  expect(result).toBe(Day);

  dateTime = '2022-12-02 02:00';
  result = getDayOrNight(dateTime);
  expect(result).toBe(Night);
});
