import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {
  IDetailWeatherAction,
  ISearchWeatherAction,
  ISelectedConditionAction,
} from '../action-interfaces/iDetailWeather';

export interface IDetailWeatherPresenter {
  getDetailWeather(): Promise<IDetailWeatherAction>;
  getDetailWeatherLoading(): Promise<IDetailWeatherAction>;
  setSelectedCondition(
    territory: ISelectedConditionEntity,
  ): ISelectedConditionAction;

  getSearchWeather(territory: string): Promise<ISearchWeatherAction>;
  getSearchWeatherLoading(): Promise<ISearchWeatherAction>;

  setSelectedTerritory(territory: ISelectedTerritoryEntity): void;
  getSelectedTerritory(): Promise<ISelectedTerritoryEntity>;
}
