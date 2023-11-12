export interface ISelectedTerritoryParams {
  name: string;
  region: string;
  country: string;
  url: string;
}

export interface ISelectedTerritoryDTO {
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly url: string;
}

class SelectedTerritoryDTO implements ISelectedTerritoryDTO {
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly url: string;

  constructor(param: ISelectedTerritoryParams) {
    this.name = param.name;
    this.region = param.region;
    this.country = param.country;
    this.url = param.url;
  }
}

export default SelectedTerritoryDTO;
