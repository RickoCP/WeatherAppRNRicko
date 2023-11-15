import {
  IForecastWeatherEntity,
  IForecastWeatherData,
  IForecastdayHour,
} from '@domains/entities/interfaces/iForecastWeather';

class ForecastWeather implements IForecastWeatherEntity {
  private readonly _localtime: string;
  private readonly _name: string;
  private readonly _temp_c: number;
  private readonly _condition_text: string;
  private readonly _condition_icon: string;
  private readonly _sunrise: string;
  private readonly _sunset: string;
  private readonly _moonrise: string;
  private readonly _moonset: string;
  private readonly _forecastday_hour: IForecastdayHour[];

  constructor(params: IForecastWeatherData) {
    this._localtime = params.location.localtime;
    this._name = params.location.name;
    this._temp_c = params.current.temp_c;
    this._condition_text = params.current.condition.text;
    this._condition_icon = params.current.condition.icon;
    this._sunrise = params.astro.sunrise;
    this._sunset = params.astro.sunset;
    this._moonrise = params.astro.moonrise;
    this._moonset = params.astro.moonset;
    this._forecastday_hour = params.hour.map(x => ({
      forecastday_time: x.time,
      forecastday_icon: x.condition.icon,
      forecastday_temp_c: x.temp_c,
      forecastday_wind_dir: x.wind_dir,
      forecastday_humidity: x.humidity,
      forecastday_uv: x.uv,
    }));
  }

  get localtime() {
    return this._localtime;
  }

  get name() {
    return this._name;
  }

  get temp_c() {
    return this._temp_c;
  }

  get condition_text() {
    return this._condition_text;
  }

  get condition_icon() {
    return this._condition_icon;
  }

  get sunrise() {
    return this._sunrise;
  }

  get sunset() {
    return this._sunset;
  }

  get moonrise() {
    return this._moonrise;
  }

  get moonset() {
    return this._moonset;
  }

  get forecastday_hour() {
    return this._forecastday_hour;
  }
}

export default ForecastWeather;
