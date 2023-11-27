import {convertToSingleArray} from '@core/lib/convertToSingleArray';
import 'react-native';

test('function convertToSingleArray test', () => {
  let currentTime = '2021-01-01 01:20';
  let currentTime2 = '2021-01-01 01:40';
  let currentTime3 = '2021-01-01 23:40';
  let data = [
    {
      date: '2021-01-01',
      hourData: [
        {
          forecastday_time: '2021-01-01 01:00',
          forecastday_icon: '',
          forecastday_temp_c: 0,
          forecastday_wind_dir: '',
          forecastday_humidity: 0,
          forecastday_uv: 0,
        },
        {
          forecastday_time: '2021-01-01 02:00',
          forecastday_icon: '',
          forecastday_temp_c: 0,
          forecastday_wind_dir: '',
          forecastday_humidity: 0,
          forecastday_uv: 0,
        },
        {
          forecastday_time: '2021-01-01 03:00',
          forecastday_icon: '',
          forecastday_temp_c: 0,
          forecastday_wind_dir: '',
          forecastday_humidity: 0,
          forecastday_uv: 0,
        },
      ],
    },
    {
      date: '2021-01-02',
      hourData: [
        {
          forecastday_time: '2021-01-02 01:00',
          forecastday_icon: '',
          forecastday_temp_c: 0,
          forecastday_wind_dir: '',
          forecastday_humidity: 0,
          forecastday_uv: 0,
        },
        {
          forecastday_time: '2021-01-02 02:00',
          forecastday_icon: '',
          forecastday_temp_c: 0,
          forecastday_wind_dir: '',
          forecastday_humidity: 0,
          forecastday_uv: 0,
        },
        {
          forecastday_time: '2021-01-02 03:00',
          forecastday_icon: '',
          forecastday_temp_c: 0,
          forecastday_wind_dir: '',
          forecastday_humidity: 0,
          forecastday_uv: 0,
        },
      ],
    },
  ];

  let result = convertToSingleArray(data, currentTime);
  expect(result.length).toBe(6);

  result = convertToSingleArray(data, currentTime2);
  expect(result.length).toBe(5);

  result = convertToSingleArray(data, currentTime3);
  expect(result.length).toBe(1);
});
