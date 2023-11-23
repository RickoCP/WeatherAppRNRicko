import {IDetailWeatherRepository} from '@domains/useCases/repository-interfaces/iDetailWeather';
import {ISessionRepository} from '@domains/useCases/repository-interfaces/iSession';

export default interface IRepositories {
  session: ISessionRepository;
  detailWeather: IDetailWeatherRepository;
}
