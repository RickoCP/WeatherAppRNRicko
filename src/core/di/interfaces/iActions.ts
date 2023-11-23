import {IDetailWeatherActions} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {ISessionActions} from '@presentation/presenters/action-interfaces/iSession';

export default interface IActions {
  session: ISessionActions;
  detailWeather: IDetailWeatherActions;
}
