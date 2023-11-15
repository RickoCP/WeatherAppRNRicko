import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

export interface IDetailWeatherUseCase {
  getDetailWeather(): Promise<IDetailWeatherEntity>;
  getSearchWeather(territory: string): Promise<ISelectedTerritoryEntity[]>;
  getSelectedTerritory(): Promise<ISelectedTerritoryEntity>;
  setSelectedTerritory(territory: ISelectedTerritoryEntity): void;
}
