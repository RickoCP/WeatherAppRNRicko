import IActions from './interfaces/iActions';
import SessionActions from '@presentation/redux/actions/Session';
import DetailWeatherActions from '@presentation/redux/actions/DetailWeather';

export default (): IActions => {
  return {
    session: new SessionActions(),
    detailWeather: new DetailWeatherActions(),
  };
};
