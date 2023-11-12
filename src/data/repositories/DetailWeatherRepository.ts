import {IDetailWeatherRepository} from '@domains/useCases/repository-interfaces/iDetailWeather';
import {IStorage} from '@data/infrastructures/interfaces/iStorage';
import {IHttp} from '@data/infrastructures/interfaces/iHttp';
import {BASE_URL, TOKEN} from '@env';
import ForecastWeatherDTO, {
  IForecastWeatherDTO,
} from '@domains/dto/ForecastWeatherDTO';
import {getResponse} from '@core/lib/getRequest';
import SearchWeatherDTO, {
  ISearchWeatherDTO,
  ISearchWeatherParams,
} from '@domains/dto/SearchWeatherDTO';
import {ISelectedTerritoryDTO} from '@domains/dto/SelectedTerritoryDTO';
import {initialSelected} from '@core/initialData/initialData';

class DetailWeatherRepository implements IDetailWeatherRepository {
  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage,
  ) {}

  // getForecastWeather(territory: string): Promise<IForecastWeatherDTO>;
  // getSearchWeather(territory: string): Promise<ISearchWeatherDTO[]>;
  // getSelectedTerritory(): Promise<ISelectedTerritoryDTO>;
  // setSelectedTerritory(territory: string): void;

  async getForecastWeather(territory: string): Promise<IForecastWeatherDTO> {
    const response = await this.http.request(
      getResponse(
        BASE_URL +
          'forecast.json?key=' +
          TOKEN +
          '&q=' +
          territory +
          '&days=1&aqi=no&alerts=no',
      ),
    );
    return new ForecastWeatherDTO(response);
  }

  async getSearchWeather(territory: string): Promise<ISearchWeatherDTO[]> {
    const response = await this.http.request(
      getResponse(
        BASE_URL +
          'forecast.json?key=' +
          TOKEN +
          '&q=' +
          territory +
          '&days=1&aqi=no&alerts=no',
      ),
    );
    return response.map(
      (data: ISearchWeatherParams) => new SearchWeatherDTO(data),
    );
  }

  async getSelectedTerritory(): Promise<ISelectedTerritoryDTO> {
    const dataSelectedTerritory = await this.storage.get('Territory');
    if (dataSelectedTerritory?.name) {
      const selectedTerritoryStorage = JSON.parse(
        dataSelectedTerritory.password,
      );
      return selectedTerritoryStorage;
    } else {
      return initialSelected;
    }
  }

  setSelectedTerritory(territory: ISelectedTerritoryDTO): void {
    const SelectedTerritor = JSON.stringify(territory);
    this.storage.set('Territory', SelectedTerritor);
  }
}

export default DetailWeatherRepository;
