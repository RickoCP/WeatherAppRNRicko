import {IDetailWeatherRepository} from '@domains/useCases/repository-interfaces/iDetailWeather';
import {IDetailWeatherUseCase} from './interfaces/iDetailWeather';
import {IDetailWeatherEntity} from '@domains/aggregates/interfaces/iDetailWeather';
import SelectedTerritory from '@domains/entities/SelectedTerritory';
import ForecastWeather from '@domains/entities/ForecastWeather';
import SelectedCondition from '@domains/entities/SelectedCondition';
import DetailWeather from '@domains/aggregates/DetailWeather';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {roundToNearestHour} from '@core/lib/roundToNearestHour';

class DetailWeatherUseCase implements IDetailWeatherUseCase {
  constructor(private readonly detailWeatherRepo: IDetailWeatherRepository) {}

  async getDetailWeather(): Promise<IDetailWeatherEntity> {
    console.log('run getDetailWeather usecase');
    const selectedTerritory =
      await this.detailWeatherRepo.getSelectedTerritory();

    const selectedTerritoryData = new SelectedTerritory(selectedTerritory);

    const forecastWeather = await this.detailWeatherRepo.getForecastWeather(
      selectedTerritoryData.url,
    );

    const ferecastWeaterData = new ForecastWeather(forecastWeather);
    const detailWeatherData = new DetailWeather();

    detailWeatherData.pushSelectedTerritory(selectedTerritoryData);
    detailWeatherData.pushForecastWeather(ferecastWeaterData);

    const nearestHour = roundToNearestHour(ferecastWeaterData.localtime);

    const filteredSelectedCondition =
      detailWeatherData.forecastWeather.forecastday_hour
        .filter(data => data.date === nearestHour.slice(0, 10))[0]
        .hourData.filter(x => x.forecastday_time === nearestHour)[0];

    const selectedConditionData = new SelectedCondition(
      filteredSelectedCondition,
    );

    detailWeatherData.pushSelectedConditionItem(selectedConditionData);

    return detailWeatherData;
  }

  async getSearchWeather(
    territory: string,
  ): Promise<ISelectedTerritoryEntity[]> {
    console.log('run getSearchWeather usecase');
    const searchWeatherlist = await this.detailWeatherRepo.getSearchWeather(
      territory,
    );
    const searchWeatherlistData = searchWeatherlist?.map(
      data => new SelectedTerritory(data),
    );
    return searchWeatherlistData;
  }

  async getSelectedTerritory(): Promise<ISelectedTerritoryEntity> {
    console.log('run getSelectedTerritory usecase');
    const selectedTerritory =
      await this.detailWeatherRepo.getSelectedTerritory();
    const selectedTerritoryData = new SelectedTerritory(selectedTerritory);
    // console.log('result getSelectedTerritory usecase: ', selectedTerritoryData);
    return selectedTerritoryData;
  }

  setSelectedTerritory(territory: ISelectedTerritoryEntity): void {
    console.log('run setSelectedTerritory usecase');
    // console.log('run setSelectedTerritory usecase: territory: ', territory);
    this.detailWeatherRepo.setSelectedTerritory(territory);
  }
}

export default DetailWeatherUseCase;
