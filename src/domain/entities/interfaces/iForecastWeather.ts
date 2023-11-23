export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface ICurrent {
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

export interface IAstro {
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

export interface IHour {
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

export interface IForecastdayHour {
  forecastday_time: string;
  forecastday_icon: string;
  forecastday_temp_c: number;
  forecastday_wind_dir: string;
  forecastday_humidity: number;
  forecastday_uv: number;
}

export interface IForecastdayHourData {
  date: string;
  hourData: IForecastdayHour[];
}

export interface IForecastWeatherEntity {
  localtime: string;
  name: string;
  temp_c: number;
  condition_text: string;
  condition_icon: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  forecastday_hour: IForecastdayHourData[];
}

interface IHourData {
  date: string;
  hourData: IHour[];
}

export interface IForecastWeatherData {
  location: ILocation;
  current: ICurrent;
  astro: IAstro;
  hour: IHourData[];
}
