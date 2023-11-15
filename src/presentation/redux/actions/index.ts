import DetailWeatherActions from './DetailWeather';
import SessionActions from './Session';

export default () => {
  return {
    session: new SessionActions(),
    detailWeather: new DetailWeatherActions(),
  };
};
