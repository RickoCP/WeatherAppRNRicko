import {
  ISelectedTerritoryEntity,
  ISelectedTerritoryData,
} from '@domains/entities/interfaces/iSelectedTerritory';

class SelectedTerritory implements ISelectedTerritoryEntity {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _region: string;
  private readonly _country: string;
  private readonly _url: string;

  constructor(params: ISelectedTerritoryData) {
    this._id = params.id;
    this._name = params.name;
    this._region = params.region;
    this._country = params.country;
    this._url = params.url;
  }

  get id() {
    return this._id;
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

export default SelectedTerritory;
