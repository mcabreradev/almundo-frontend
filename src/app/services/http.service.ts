import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class HttpService {
  private headers: Headers;
  private options: RequestOptionsArgs;

  constructor(
    private _http: Http,
    private _api: ApiService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.options = { headers: this.headers };
  }

  public get(url: string, options?: RequestOptionsArgs) {
    return this._http.get(`${this._api.base}${url}`, options || this.options);
  }

  public post(url: string, body: string, options?: RequestOptionsArgs) {
    return this._http.post(`${this._api.base}${url}`, body, options || this.options);
  }

  public put(url: string, body: string, options?: RequestOptionsArgs) {
    return this._http.put(`${this._api.base}${url}`, body, options || this.options);
  }

  public delete(url: string, options?: RequestOptionsArgs) {
    return this._http.delete(`${this._api.base}${url}`, options || this.options);
  }
}
