import {IHttp} from '@data/infrastructures/interfaces/iHttp';
import {IStorage} from '@data/infrastructures/interfaces/iStorage';

export default interface IInfrastructures {
  httpPinning: IHttp;
  http: IHttp;
  storage: IStorage;
}
