import {IDetailWeatherUseCase} from '@domains/useCases/interfaces/iDetailWeather';
import {
  IDetailWeatherActions,
  IDetailWeatherAction,
  ISearchWeatherAction,
  ISelectedConditionAction,
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
      await this.setSelectedCondition(DetailWeatherEntity.selectedCondition);
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

  setSelectedCondition(
    territory: ISelectedConditionEntity,
  ): ISelectedConditionAction {
    console.log('run setSelectedCondition presenter ');
    // return this.actions.setSelectedCondition(territory);
    return this.actions.setSelectedCondition({
      selected_time: territory.selected_time,
      selected_temp_c: territory.selected_temp_c,
      selected_wind_dir: territory.selected_wind_dir,
      selected_humidity: territory.selected_humidity,
      selected_uv: territory.selected_uv,
    });
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

  async resetSearchWeather(): Promise<ISearchWeatherAction> {
    console.log('run setSearchWeather presenter ');
    return this.actions.resetSearchWeather();
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
