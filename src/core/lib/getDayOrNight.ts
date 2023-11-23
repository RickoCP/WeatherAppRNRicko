import {Day, Night} from '@core/initialData/initialData';

export function getDayOrNight(dateString: string): string {
  const date = new Date(dateString);
  date.setHours(date.getHours());
  const hours = date.getHours();
  const isDayTime = hours > 6 && hours < 19;
  if (isDayTime === true) {
    return Day;
  } else {
    return Night;
  }
}
