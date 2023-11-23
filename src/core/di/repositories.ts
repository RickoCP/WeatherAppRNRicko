import IRepositories from './interfaces/iRepositories';
import IInfrastructures from './interfaces/iInfrastructures';
import SessionRepository from '@data/repositories/SessionRepository';
import DetailWeatherRepository from '@data/repositories/DetailWeatherRepository';

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    detailWeather: new DetailWeatherRepository(
      infrastructure.http,
      infrastructure.storage,
    ),
  };
};
