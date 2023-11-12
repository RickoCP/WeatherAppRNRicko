import {IForecastWeatherEntity} from '@domains/entities/interfaces/iForecastWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

export interface IDetailWeatherEntity {
  selectedTerritory: ISelectedTerritoryEntity;
  forecastWeather: IForecastWeatherEntity;
  selectedCondition: ISelectedConditionEntity;
  pushSelectedTerritory(selectedTerritoryItem: ISelectedTerritoryEntity): this;
  pushForecastWeather(forecastWeatherItem: IForecastWeatherEntity): this;
  pushSelectedConditionItem(
    selectedConditionItem: ISelectedConditionEntity,
  ): this;
}

export interface IDetailWeatherData {}
