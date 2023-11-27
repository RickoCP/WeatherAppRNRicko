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

  async getForecastWeather(territory: string): Promise<IForecastWeatherDTO> {
    console.log('run getForecastWeather repository');
    const response = await this.http.request(
      getResponse(
        BASE_URL +
          'forecast.json?key=' +
          TOKEN +
          '&q=' +
          territory +
          '&days=2&aqi=no&alerts=no',
      ),
    );
    return new ForecastWeatherDTO(response);
  }

  async getSearchWeather(territory: string): Promise<ISearchWeatherDTO[]> {
    console.log('run getSearchWeather repository');
    const response = await this.http.request(
      getResponse(
        BASE_URL +
          'search.json?key=' +
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
    console.log('run getSelectedTerritory repository');
    const dataSelectedTerritory = await this.storage.get('Territory');
    if (dataSelectedTerritory?.password) {
      const selectedTerritoryStorage = JSON.parse(
        dataSelectedTerritory.password,
      );
      return selectedTerritoryStorage;
    } else {
      console.log(
        'run getSelectedTerritory repository: error: ',
        initialSelected,
      );
      return initialSelected;
    }
  }

  setSelectedTerritory(territory: ISelectedTerritoryDTO): void {
    console.log('run setSelectedTerritory repository');
    const territoryData = {
      id: territory.id,
      name: territory.name,
      region: territory.region,
      country: territory.country,
      url: territory.url,
    };
    const SelectedTerritory = JSON.stringify(territoryData);

    this.storage.set('Territory', SelectedTerritory);
  }
}

export default DetailWeatherRepository;
