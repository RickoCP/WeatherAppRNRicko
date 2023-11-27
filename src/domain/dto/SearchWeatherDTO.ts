export interface ISearchWeatherParams {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export interface ISearchWeatherDTO {
  readonly id: number;
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly url: string;
}

class SearchWeatherDTO implements ISearchWeatherDTO {
  readonly id: number;
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly url: string;

  constructor(param: ISearchWeatherParams) {
    this.id = param.id;
    this.name = param.name;
    this.region = param.region;
    this.country = param.country;
    this.url = param.url;
  }
}

export default SearchWeatherDTO;
