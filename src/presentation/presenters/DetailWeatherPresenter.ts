import {IDetailWeatherUseCase} from '@domains/useCases/interfaces/iDetailWeather';
import {
  IDetailWeatherActions,
  IDetailWeatherAction,
  ISearchWeatherAction,
} from './action-interfaces/iDetailWeather';
import {IDetailWeatherPresenter} from './interfaces/iDetailWeather';
import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';

class DetailWeatherPresenter implements IDetailWeatherPresenter {
  constructor(
    private readonly useCases: IDetailWeatherUseCase,
    private readonly actions: IDetailWeatherActions,
  ) {}

  async getDetailWeather(): Promise<IDetailWeatherAction> {
    console.log('run getDetailWeather presenter ');
    try {
      const DetailWeatherEntity: IDetailWeatherEntity =
        await this.useCases.getDetailWeather();
      return this.actions.getDetailWeather(DetailWeatherEntity);
    } catch (err: any) {
      console.log('error getDetailWeather presenter:', err);
      return this.actions.getDetailWeatherError(err);
    }
  }

  async getDetailWeatherLoading(): Promise<IDetailWeatherAction> {
    console.log('run getDetailWeatherLoading presenter ');
    return this.actions.getDetailWeatherLoading();
  }

  setSelectedCondition(territory: ISelectedConditionEntity): void {
    console.log('run setSelectedCondition presenter ');
    this.actions.setSelectedCondition(territory);
  }

  async getSearchWeather(territory: string): Promise<ISearchWeatherAction> {
    console.log('run getSearchWeather presenter ');
    try {
      const SearchWeatherEntity: ISelectedTerritoryEntity[] =
        await this.useCases.getSearchWeather(territory);
      return this.actions.getSearchWeather(SearchWeatherEntity);
    } catch (err: any) {
      console.log('error getSearchWeather presenter:', err);
      return this.actions.getSearchWeatherError(err);
    }
  }

  async getSearchWeatherLoading(): Promise<ISearchWeatherAction> {
    console.log('run getSearchWeatherLoading presenter ');
    return this.actions.getSearchWeatherLoading();
  }

  setSelectedTerritory(territory: ISelectedTerritoryEntity): void {
    console.log('run setSelectedTerritory presenter');
    this.useCases.setSelectedTerritory(territory);
  }

  getSelectedTerritory(): Promise<ISelectedTerritoryEntity> {
    console.log('run getSelectedTerritory presenter');
    return this.useCases.getSelectedTerritory();
  }
}

export default DetailWeatherPresenter;
