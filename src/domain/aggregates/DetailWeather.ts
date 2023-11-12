import {initialSelected} from '@core/initialData/initialData';
import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {IForecastWeatherEntity} from '@domains/entities/interfaces/iForecastWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

class DetailWeather implements IDetailWeatherEntity {
  private _selectedTerritory: ISelectedTerritoryEntity;
  private _forecastWeather: IForecastWeatherEntity;
  private _selectedCondition: ISelectedConditionEntity;

  constructor() {
    this._selectedTerritory = {
      name: initialSelected.name,
      region: initialSelected.region,
      country: initialSelected.country,
      url: initialSelected.url,
    };

    this._forecastWeather = {
      localtime: '',
      name: '',
      temp_c: 0,
      condition_text: '',
      condition_icon: '',
      sunrise: '',
      sunset: '',
      moonrise: '',
      moonset: '',
      forecastday_hour: [],
    };
    this._selectedCondition = {
      selected_temp_c: 0,
      selected_wind_dir: '',
      selected_humidity: 0,
      selected_uv: 0,
    };
  }

  pushSelectedTerritory(selectedTerritoryItem: ISelectedTerritoryEntity) {
    this._selectedTerritory = selectedTerritoryItem;
    return this;
  }

  pushForecastWeather(forecastWeatherItem: IForecastWeatherEntity) {
    this._forecastWeather = forecastWeatherItem;
    return this;
  }

  pushSelectedConditionItem(selectedConditionItem: ISelectedConditionEntity) {
    this._selectedCondition = selectedConditionItem;
    return this;
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

export default DetailWeather;
