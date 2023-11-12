import {
  ISelectedConditionEntity,
  ISelectedConditionData,
} from '@domains/entities/interfaces/iSelectedCondition';

class SelectedCondition implements ISelectedConditionEntity {
  private readonly _selected_temp_c: number;
  private readonly _selected_wind_dir: string;
  private readonly _selected_humidity: number;
  private readonly _selected_uv: number;

  constructor(params: ISelectedConditionData) {
    this._selected_temp_c = params.temp_c;
    this._selected_wind_dir = params.wind_dir;
    this._selected_humidity = params.humidity;
    this._selected_uv = params.uv;
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
