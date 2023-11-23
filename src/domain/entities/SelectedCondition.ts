import {
  ISelectedConditionEntity,
  ISelectedConditionData,
} from '@domains/entities/interfaces/iSelectedCondition';

class SelectedCondition implements ISelectedConditionEntity {
  private readonly _selected_time: string;
  private readonly _selected_temp_c: number;
  private readonly _selected_wind_dir: string;
  private readonly _selected_humidity: number;
  private readonly _selected_uv: number;

  constructor(params: ISelectedConditionData) {
    this._selected_time = params.forecastday_time;
    this._selected_temp_c = params.forecastday_temp_c;
    this._selected_wind_dir = params.forecastday_wind_dir;
    this._selected_humidity = params.forecastday_humidity;
    this._selected_uv = params.forecastday_uv;
  }

  get selected_time() {
    return this._selected_time;
  }

  get selected_temp_c() {
    return this._selected_temp_c;
  }

  get selected_wind_dir() {
    return this._selected_wind_dir;
  }

  get selected_humidity() {
    return this._selected_humidity;
  }

  get selected_uv() {
    return this._selected_uv;
  }
}

export default SelectedCondition;
