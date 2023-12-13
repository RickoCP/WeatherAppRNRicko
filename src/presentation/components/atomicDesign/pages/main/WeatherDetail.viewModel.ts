import {useDispatch, useSelector} from 'react-redux';
import di from '@core/di';
import {
  IDetailWeather,
  ISearchWeather,
  ISelectedWeather,
} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {IDetailWeatherStateGroup} from '@presentation/redux/interfaces/iDetailWeather';
import DetailWeatherVM from '@presentation/vm/DetailWeather';
import {ISearchWeatherStateGroup} from '@presentation/redux/interfaces/iSearchWeather';
import SearchWeatherVM from '@presentation/vm/SearchWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {ISelectedWeatherStateGroup} from '@presentation/redux/interfaces/iSelectedWaether';

export function useWeatherDetailViewModel() {
  const dispatch = useDispatch();

  let detailWeather: IDetailWeather = useSelector(
    (state: IDetailWeatherStateGroup) => state.detailWeather,
  );
  let searchWeather: ISearchWeather = useSelector(
    (state: ISearchWeatherStateGroup) => state.searchWeather,
  );
  let selectedWeather: ISelectedWeather = useSelector(
    (state: ISelectedWeatherStateGroup) => state.selectedWeather,
  );

  const asyncDetailWeather = async () => {
    console.log('run asyncDetailWeather hook');
    dispatch(await di.detailWeather.getDetailWeatherLoading());
    dispatch(await di.detailWeather.getDetailWeather());
  };

  let detailWeatherVM = new DetailWeatherVM(
    detailWeather?.detailWeather[0],
    selectedWeather?.selectedCondition[0],
  );

  let searchWeatherVM = searchWeather?.searchWeather?.map(
    searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
  );

  const onSelectCondition = async (
    conditionSelected: ISelectedConditionEntity,
  ) => {
    console.log('run onSelectCondition hook');
    dispatch(di.detailWeather.setSelectedCondition(conditionSelected));
    detailWeatherVM = new DetailWeatherVM(
      detailWeather?.detailWeather[0],
      selectedWeather?.selectedCondition[0],
    );
  };

  const onSelectTerritoryVM = async (
    territorySelected: ISelectedTerritoryEntity,
  ) => {
    console.log('run onSelectTerritory hook');
    di.detailWeather.setSelectedTerritory(territorySelected);
    dispatch(await di.detailWeather.getDetailWeatherLoading());
    dispatch(await di.detailWeather.getDetailWeather());
    detailWeatherVM = new DetailWeatherVM(
      detailWeather?.detailWeather[0],
      selectedWeather?.selectedCondition[0],
    );
    dispatch(await di.detailWeather.resetSearchWeather());
    searchWeatherVM = searchWeather?.searchWeather?.map(
      searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
    );
  };

  const handleSearch = async (search: string) => {
    console.log('run handleSearch hook');
    if (search && search.length > 2) {
      dispatch(await di.detailWeather.getSearchWeather(search));
      searchWeatherVM = searchWeather?.searchWeather?.map(
        searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
      );
    }
  };

  const toggleSearchVM = async (toggle: boolean) => {
    if (toggle === false) {
      dispatch(await di.detailWeather.resetSearchWeather());
      searchWeatherVM = searchWeather?.searchWeather?.map(
        searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
      );
    }
  };

  return {
    asyncDetailWeather,
    detailWeather,
    searchWeather,
    selectedWeather,
    detailWeatherVM,
    searchWeatherVM,
    onSelectCondition,
    onSelectTerritoryVM,
    toggleSearchVM,
    handleSearch,
  };
}
