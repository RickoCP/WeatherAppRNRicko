import {
  IDetailWeather,
  IDetailWeatherAction,
} from '@presentation/presenters/action-interfaces/iDetailWeather';

export const GET_DETAILWEATHERSUCCESS = 'GET_DETAILWEATHERSUCCESS';
export const GET_DETAILWEATHERLOADING = 'GET_DETAILWEATHERLOADING';
export const GET_DETAILWEATHERERROR = 'GET_DETAILWEATHERERROR';
export const GET_DETAILWEATHERRESET = 'GET_DETAILWEATHERRESET';

export interface IDetailWeatherStateGroup {
  detailWeather: IDetailWeather;
}

export type IReducer = (
  state: IDetailWeather,
  action: IDetailWeatherAction,
) => IDetailWeather;
