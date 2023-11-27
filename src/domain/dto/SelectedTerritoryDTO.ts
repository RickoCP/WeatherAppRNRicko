export interface ISelectedTerritoryParams {
  id: number;
  name: string;
  region: string;
  country: string;
  url: string;
}

export interface ISelectedTerritoryDTO {
  readonly id: number;
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly url: string;
}

class SelectedTerritoryDTO implements ISelectedTerritoryDTO {
  readonly id: number;
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly url: string;

  constructor(param: ISelectedTerritoryParams) {
    this.id = param.id;
    this.name = param.name;
    this.region = param.region;
    this.country = param.country;
    this.url = param.url;
  }
}

export default SelectedTerritoryDTO;
