import {
  IDetailWeather,
  IDetailWeatherAction,
} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {
  GET_DETAILWEATHERERROR,
  GET_DETAILWEATHERLOADING,
  GET_DETAILWEATHERRESET,
  GET_DETAILWEATHERSUCCESS,
  IReducer,
} from '../interfaces/iDetailWeather';

const initState: IDetailWeather = {
  detailWeather: [],
  selectedCondition: [],
  isLoading: false,
  error: {},
};

const detailWeather: IReducer = (
  state = initState,
  action: IDetailWeatherAction,
) => {
  console.log('run detailWeather reducer:  ', action.type);
  switch (action.type) {
    case GET_DETAILWEATHERLOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DETAILWEATHERSUCCESS:
      return {
        ...state,
        detailWeather: action.payload.detailWeather,
        isLoading: false,
        error: '',
      };
    case GET_DETAILWEATHERERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case GET_DETAILWEATHERRESET:
      return {
        ...initState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailWeather;
