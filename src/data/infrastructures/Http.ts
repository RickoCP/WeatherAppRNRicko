import {IHttp, IRequestOption} from './interfaces/iHttp';

class Http implements IHttp {
  request(requestOption: IRequestOption): any {
    const option: RequestInit = {method: requestOption.method};

    if (requestOption?.headers) {
      option.headers = new Headers(requestOption.headers);
    }
    if (requestOption?.body) {
      option.body = JSON.stringify(requestOption.body);
    }

    return fetch(requestOption.url, option)
      .then(res => res.json())
      .catch(e => {
        throw new Error(e);
      });
  }
}

export default Http;
