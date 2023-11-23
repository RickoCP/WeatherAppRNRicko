import {
  ISearchWeather,
  ISearchWeatherAction,
} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {
  GET_SEARCHWEATHERERROR,
  GET_SEARCHWEATHERLOADING,
  GET_SEARCHWEATHERRESET,
  GET_SEARCHWEATHERSUCCESS,
  IReducer,
} from '../interfaces/iSearchWeather';

const initState: ISearchWeather = {
  searchWeather: [],
  isLoading: false,
  error: {},
};

const searchWeather: IReducer = (
  state = initState,
  action: ISearchWeatherAction,
) => {
  console.log('run searchWeather reducer:  ', action.type);
  switch (action.type) {
    case GET_SEARCHWEATHERLOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SEARCHWEATHERSUCCESS:
      return {
        ...state,
        searchWeather: action.payload.searchWeather,
        isLoading: false,
        error: '',
      };
    case GET_SEARCHWEATHERERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case GET_SEARCHWEATHERRESET:
      return {
        ...initState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchWeather;
