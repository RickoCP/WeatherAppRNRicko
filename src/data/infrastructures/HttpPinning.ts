import {IHttp, IRequestOption} from './interfaces/iHttp';

class HttpPinning implements IHttp {
  request(requestOption: IRequestOption): any {
    const option: any = {method: requestOption.method};
    if (requestOption?.headers) {
      option.headers = requestOption.headers;
    }
    if (requestOption?.body) {
      option.body = requestOption.body;
    }
    if (requestOption?.sslPinning) {
      option.sslPinning = requestOption.sslPinning;
    }

    return fetch(requestOption.url, option)
      .then(res => res.json())
      .catch(e => {
        throw new Error(e);
      });
  }
}

export default HttpPinning;
