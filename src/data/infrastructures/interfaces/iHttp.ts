export interface IRequestOption {
  readonly method: string;
  readonly url: string;
  readonly headers?: any;
  readonly body?: any;
  readonly sslPinning?: {
    certs: string[];
  };
  readonly disableAllSecurity?: boolean;
}

export interface IHttp {
  request(requestOption: IRequestOption): Promise<any>;
}
