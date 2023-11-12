import {IForecastWeatherDTO} from '@domains/dto/ForecastWeatherDTO';
import {ISearchWeatherDTO} from '@domains/dto/SearchWeatherDTO';
import {ISelectedTerritoryDTO} from '@domains/dto/SelectedTerritoryDTO';

export interface IDetailWeatherRepository {
  getForecastWeather(territory: string): Promise<IForecastWeatherDTO>;
  getSearchWeather(territory: string): Promise<ISearchWeatherDTO[]>;
  getSelectedTerritory(): Promise<ISelectedTerritoryDTO>;
  setSelectedTerritory(territory: ISelectedTerritoryDTO): void;
}
