import IUseCases from './interfaces/iUseCases';
import IActions from './interfaces/iActions';
import SessionPresenter from '@presentation/presenters/SessionPresenter';
import DetailWeatherPresenter from '@presentation/presenters/DetailWeatherPresenter';

export default (useCases: IUseCases, actions: IActions) => {
  return {
    session: new SessionPresenter(useCases.session, actions.session),
    detailWeather: new DetailWeatherPresenter(
      useCases.detailWeather,
      actions.detailWeather,
    ),
  };
};
