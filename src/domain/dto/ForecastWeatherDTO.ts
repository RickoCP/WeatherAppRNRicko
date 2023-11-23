interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface ICurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ICondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface IAstro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

interface ICondition {
  text: string;
  icon: string;
  code: number;
}

interface IHour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ICondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

interface IForecastday {
  date: string;
  date_epoch: number;
  day: any;
  astro: IAstro;
  hour: IHour[];
}

interface IHourData {
  date: string;
  hourData: IHour[];
}

interface IForecast {
  forecastday: IForecastday[];
}

export interface IForecastWeatherParams {
  location: ILocation;
  current: ICurrent;
  forecast: IForecast;
}

export interface IForecastWeatherDTO {
  readonly location: ILocation;
  readonly current: ICurrent;
  readonly astro: IAstro;
  readonly hour: IHourData[];
}

class ForecastWeatherDTO implements IForecastWeatherDTO {
  readonly location: ILocation;
  readonly current: ICurrent;
  readonly astro: IAstro;
  readonly hour: IHourData[];

  constructor(param: IForecastWeatherParams) {
    this.location = param.location;
    this.current = param.current;
    this.astro = param.forecast.forecastday[0].astro;
    this.hour = param.forecast.forecastday.map(x => ({
      date: x.date,
      hourData: x.hour,
    }));
  }
}

export default ForecastWeatherDTO;
