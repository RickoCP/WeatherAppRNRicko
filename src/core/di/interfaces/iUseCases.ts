import {ISessionUseCase} from '@domains/useCases/interfaces/iSession';
import {IDetailWeatherUseCase} from '@domains/useCases/interfaces/iDetailWeather';

export default interface IUseCases {
  session: ISessionUseCase;
  detailWeather: IDetailWeatherUseCase;
}
