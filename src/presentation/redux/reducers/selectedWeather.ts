import {
  ISelectedWeather,
  ISelectedConditionAction,
} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {
  GET_SELECTEDWEATHERRESET,
  SET_SELECTEDWEATHER,
  IReducer,
} from '../interfaces/iSelectedWaether';
import {GET_DETAILWEATHERSUCCESS} from '../interfaces/iDetailWeather';

const initState: ISelectedWeather = {
  selectedCondition: [],
};

const selectedWeather: IReducer = (
  state = initState,
  action: ISelectedConditionAction,
) => {
  console.log('run selectedWeather reducer: ', action?.type);
  switch (action.type) {
    case GET_SELECTEDWEATHERRESET:
      return {
        ...initState,
      };
    case SET_SELECTEDWEATHER:
      return {
        selectedCondition: action?.payload?.selectedCondition,
      };
    case GET_DETAILWEATHERSUCCESS:
      return {
        selectedCondition: action?.payload?.selectedCondition,
      };
    default:
      return {
        ...state,
      };
  }
};

export default selectedWeather;
