import {
  IForecastdayHour,
  IForecastdayHourData,
} from '@domains/entities/interfaces/iForecastWeather';
import {roundToNearestHour} from './roundToNearestHour';

export function convertToSingleArray(
  data: IForecastdayHourData[],
  CurentTime: string,
): IForecastdayHour[] {
  const dataConverted = data?.map(o => o.hourData).flat();
  let startId = dataConverted?.findIndex(
    x => x.forecastday_time === roundToNearestHour(CurentTime),
  );

  return dataConverted?.slice(startId, startId + 24);
}
