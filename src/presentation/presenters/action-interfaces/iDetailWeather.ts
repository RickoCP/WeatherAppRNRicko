import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

export interface IDetailWeather {
  detailWeather: IDetailWeatherEntity[];
  selectedCondition: ISelectedConditionEntity[];
  isLoading: boolean;
  error: any;
}

export interface IDetailWeatherAction {
  type: string;
  payload: IDetailWeather;
}

export interface ISelectedConditionAction {
  type: string;
  payload: ISelectedConditionEntity;
}

export interface ISearchWeatherAction {
  type: string;
  payload: ISearchWeather;
}

export interface ISearchWeather {
  searchWeather: ISelectedTerritoryEntity[];
  isLoading: boolean;
  error: any;
}

export interface IDetailWeatherActions {
  getDetailWeather(
    DetailWeatherEntity: IDetailWeatherEntity,
  ): IDetailWeatherAction;
  getDetailWeatherError(err: any): IDetailWeatherAction;
  getDetailWeatherLoading(): IDetailWeatherAction;

  setSelectedCondition(
    condition: ISelectedConditionEntity,
  ): IDetailWeatherAction;

  getSearchWeather(
    SearchWeatherEntity: ISelectedTerritoryEntity[],
  ): ISearchWeatherAction;
  getSearchWeatherError(err: any): ISearchWeatherAction;
  getSearchWeatherLoading(): ISearchWeatherAction;
}
