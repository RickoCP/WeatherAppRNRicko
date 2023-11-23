import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';

export interface ISearchWeatherVM {
  name: string;
  region: string;
  country: string;
  url: string;
}

class SearchWeatherVM implements ISearchWeatherVM {
  private readonly _name: string;
  private readonly _region: string;
  private readonly _country: string;
  private readonly _url: string;

  constructor(params: ISelectedTerritoryEntity) {
    this._name = params?.name;
    this._region = params?.region;
    this._country = params?.country;
    this._url = params?.url;
  }

  get name() {
    return this._name;
  }

  get region() {
    return this._region;
  }

  get country() {
    return this._country;
  }

  get url() {
    return this._url;
  }
}

export default SearchWeatherVM;
