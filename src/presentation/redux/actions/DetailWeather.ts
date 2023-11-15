import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import {
  IDetailWeatherActions,
  IDetailWeatherAction,
  ISearchWeatherAction,
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

class DetailWeatherActions implements IDetailWeatherActions {
  getDetailWeather(
    DetailWeatherEntity: IDetailWeatherEntity,
  ): IDetailWeatherAction {
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
  ): IDetailWeatherAction {
    return {
      type: GET_DETAILWEATHERERROR,
      payload: {
        detailWeather: [],
        selectedCondition: [condition],
        isLoading: false,
        error: '',
      },
    };
  }

  getSearchWeather(
    SearchWeatherEntity: ISelectedTerritoryEntity[],
  ): ISearchWeatherAction {
    return {
      type: GET_SEARCHWEATHERSUCCESS,
      payload: {
        searchWeather: SearchWeatherEntity,
        isLoading: false,
        error: {},
      },
    };
  }

  getSearchWeatherError(err: any): ISearchWeatherAction {
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
