import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {
  IDetailWeatherActions,
  IDetailWeatherAction,
  ISearchWeatherAction,
  ISelectedConditionAction,
} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {
  GET_DETAILWEATHERERROR,
  GET_DETAILWEATHERLOADING,
  GET_DETAILWEATHERSUCCESS,
} from '../interfaces/iDetailWeather';
import {
  GET_SEARCHWEATHERERROR,
  GET_SEARCHWEATHERLOADING,
  GET_SEARCHWEATHERSUCCESS,
} from '../interfaces/iSearchWeather';
import {SET_SELECTEDWEATHER} from '../interfaces/iSelectedWaether';

class DetailWeatherActions implements IDetailWeatherActions {
  getDetailWeather(
    DetailWeatherEntity: IDetailWeatherEntity,
  ): IDetailWeatherAction {
    console.log('run getDetailWeather action');
    return {
      type: GET_DETAILWEATHERSUCCESS,
      payload: {
        detailWeather: [DetailWeatherEntity],
        selectedCondition: [DetailWeatherEntity.selectedCondition],
        isLoading: false,
        error: {},
      },
    };
  }

  getDetailWeatherLoading(): IDetailWeatherAction {
    console.log('run getDetailWeatherLoading action');
    return {
      type: GET_DETAILWEATHERLOADING,
      payload: {
        detailWeather: [],
        selectedCondition: [],
        isLoading: true,
        error: '',
      },
    };
  }

  getDetailWeatherError(err: any): IDetailWeatherAction {
    console.log('run getDetailWeatherError action');
    return {
      type: GET_DETAILWEATHERERROR,
      payload: {
        detailWeather: [],
        selectedCondition: [],
        isLoading: false,
        error: err,
      },
    };
  }

  setSelectedCondition(
    condition: ISelectedConditionEntity,
  ): ISelectedConditionAction {
    console.log('run setSelectedCondition action');
    return {
      type: SET_SELECTEDWEATHER,
      payload: {
        selectedCondition: [condition],
      },
    };
  }

  getSearchWeather(
    SearchWeatherEntity: ISelectedTerritoryEntity[],
  ): ISearchWeatherAction {
    console.log('run getSearchWeather action');
    return {
      type: GET_SEARCHWEATHERSUCCESS,
      payload: {
        searchWeather: SearchWeatherEntity,
        isLoading: false,
        error: {},
      },
    };
  }

  resetSearchWeather(): ISearchWeatherAction {
    console.log('run getSearchWeather action');
    return {
      type: GET_SEARCHWEATHERSUCCESS,
      payload: {
        searchWeather: [],
        isLoading: false,
        error: {},
      },
    };
  }

  getSearchWeatherError(err: any): ISearchWeatherAction {
    console.log('run getSearchWeatherError action');
    return {
      type: GET_SEARCHWEATHERERROR,
      payload: {
        searchWeather: [],
        isLoading: false,
        error: err,
      },
    };
  }

  getSearchWeatherLoading(): ISearchWeatherAction {
    console.log('run getSearchWeatherLoading action');
    return {
      type: GET_SEARCHWEATHERLOADING,
      payload: {
        searchWeather: [],
        isLoading: true,
        error: {},
      },
    };
  }
}

export default DetailWeatherActions;
