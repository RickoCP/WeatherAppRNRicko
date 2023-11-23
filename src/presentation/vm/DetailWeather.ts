import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {IForecastWeatherEntity} from '@domains/entities/interfaces/iForecastWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

export interface IDetailWeatherVM {
  selectedTerritory: ISelectedTerritoryEntity;
  forecastWeather: IForecastWeatherEntity;
  selectedCondition: ISelectedConditionEntity;
}

class DetailWeatherVM implements IDetailWeatherVM {
  private readonly _selectedTerritory: ISelectedTerritoryEntity;
  private readonly _forecastWeather: IForecastWeatherEntity;
  private readonly _selectedCondition: ISelectedConditionEntity;

  constructor(
    DetailWeatherData: IDetailWeatherEntity,
    electedConditionData: ISelectedConditionEntity,
  ) {
    this._selectedTerritory = DetailWeatherData?.selectedTerritory;
    this._forecastWeather = DetailWeatherData?.forecastWeather;
    this._selectedCondition = electedConditionData;
  }

  get selectedTerritory() {
    return this._selectedTerritory;
  }

  get forecastWeather() {
    return this._forecastWeather;
  }

  get selectedCondition() {
    return this._selectedCondition;
  }
}

export default DetailWeatherVM;
