import IRepositories from './interfaces/iRepositories';
import IUseCases from './interfaces/iUseCases';
import SessionUseCase from '@domains/useCases/SessionUseCase';
import DetailWeatherUseCase from '@domains/useCases/DetailWeatherUseCase';

export default (repositories: IRepositories): IUseCases => {
  return {
    session: new SessionUseCase(repositories.session),
    detailWeather: new DetailWeatherUseCase(repositories.detailWeather),
  };
};
