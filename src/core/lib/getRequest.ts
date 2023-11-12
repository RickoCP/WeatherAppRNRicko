import {IRequestOption} from '@data/infrastructures/interfaces/iHttp';

export function getResponse(url: string): IRequestOption {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url: url,
    disableAllSecurity: true,
    sslPinning: {
      certs: ['PokeApiCert'],
    },
  };
}
