import {
  ISelectedConditionAction,
  ISelectedWeather,
} from '@presentation/presenters/action-interfaces/iDetailWeather';

export const GET_SELECTEDWEATHERSUCCESS = 'GET_SELECTEDWEATHERSUCCESS';
export const GET_SELECTEDWEATHERLOADING = 'GET_SELECTEDWEATHERLOADING';
export const GET_SELECTEDWEATHERERROR = 'GET_SELECTEDWEATHERERROR';
export const GET_SELECTEDWEATHERRESET = 'GET_SELECTEDWEATHERRESET';
export const SET_SELECTEDWEATHER = 'SET_SELECTEDWEATHER';

export interface ISelectedWeatherStateGroup {
  selectedWeather: ISelectedWeather;
}

export type IReducer = (
  state: ISelectedWeather,
  action: ISelectedConditionAction,
) => ISelectedWeather;
