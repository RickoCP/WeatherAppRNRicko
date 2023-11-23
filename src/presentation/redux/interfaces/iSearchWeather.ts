import {
  ISearchWeather,
  ISearchWeatherAction,
} from '@presentation/presenters/action-interfaces/iDetailWeather';

export const GET_SEARCHWEATHERSUCCESS = 'GET_SEARCHWEATHERSUCCESS';
export const GET_SEARCHWEATHERLOADING = 'GET_SEARCHWEATHERLOADING';
export const GET_SEARCHWEATHERERROR = 'GET_SEARCHWEATHERERROR';
export const GET_SEARCHWEATHERRESET = 'GET_SEARCHWEATHERRESET';

export interface ISearchWeatherStateGroup {
  searchWeather: ISearchWeather;
}

export type IReducer = (
  state: ISearchWeather,
  action: ISearchWeatherAction,
) => ISearchWeather;
