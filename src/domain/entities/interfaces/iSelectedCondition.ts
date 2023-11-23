export interface ISelectedConditionEntity {
  selected_time: string;
  selected_temp_c: number;
  selected_wind_dir: string;
  selected_humidity: number;
  selected_uv: number;
}

export interface ISelectedConditionData {
  forecastday_time: string;
  forecastday_icon: string;
  forecastday_temp_c: number;
  forecastday_wind_dir: string;
  forecastday_humidity: number;
  forecastday_uv: number;
}
