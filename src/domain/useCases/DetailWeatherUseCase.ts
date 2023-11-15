import {IDetailWeatherRepository} from '@domains/useCases/repository-interfaces/iDetailWeather';
import {IDetailWeatherUseCase} from './interfaces/iDetailWeather';
import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import SelectedTerritory from '@domains/entities/SelectedTerritory';
import ForecastWeather from '@domains/entities/ForecastWeather';
import SelectedCondition from '@domains/entities/SelectedCondition';
import DetailWeather from '@domains/aggregates/DetailWeather';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

class DetailWeatherUseCase implements IDetailWeatherUseCase {
  constructor(private readonly detailWeatherRepo: IDetailWeatherRepository) {}

  async getDetailWeather(): Promise<IDetailWeatherEntity> {
    const selectedTerritory =
      await this.detailWeatherRepo.getSelectedTerritory();
    const forecastWeather = await this.detailWeatherRepo.getForecastWeather(
      selectedTerritory.url,
    );

    const selectedTerritoryData = new SelectedTerritory(selectedTerritory);
    const ferecastWeaterData = new ForecastWeather(forecastWeather);
    const detailWeatherData = new DetailWeather();

    detailWeatherData.pushSelectedTerritory(selectedTerritoryData);
    detailWeatherData.pushForecastWeather(ferecastWeaterData);

    const filteredSelectedCondition =
      detailWeatherData.forecastWeather.forecastday_hour.filter(
        data => (data.forecastday_time = forecastWeather.current.last_updated),
      )[0];

    const selectedConditionData = new SelectedCondition(
      filteredSelectedCondition,
    );
    detailWeatherData.pushSelectedConditionItem(selectedConditionData);

    return detailWeatherData;
  }

  async getSearchWeather(
    territory: string,
  ): Promise<ISelectedTerritoryEntity[]> {
    const searchWeatherlist = await this.detailWeatherRepo.getSearchWeather(
      territory,
    );

    const searchWeatherlistData = searchWeatherlist.map(
      data => new SelectedTerritory(data),
    );

    return searchWeatherlistData;
  }

  async getSelectedTerritory(): Promise<ISelectedTerritoryEntity> {
    const selectedTerritory =
      await this.detailWeatherRepo.getSelectedTerritory();
    const selectedTerritoryData = new SelectedTerritory(selectedTerritory);
    return selectedTerritoryData;
  }

  setSelectedTerritory(territory: ISelectedTerritoryEntity): void {
    this.detailWeatherRepo.setSelectedTerritory(territory);
  }
}

export default DetailWeatherUseCase;
