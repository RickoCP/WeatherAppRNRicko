import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

export interface IDetailWeatherUseCase {
  getDetailWeather(territory: string): Promise<IDetailWeatherEntity>;
  getSearchWeather(territory: string): Promise<ISelectedTerritoryEntity[]>;
  getSelectedTerritory(): Promise<ISelectedTerritoryEntity>;
  setSelectedTerritory(territory: string): void;
}
