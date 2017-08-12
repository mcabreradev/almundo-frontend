import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiService {

  public http: Http;
  public base: string = 'http://localhost:3000/api/v1/';
  public requestHeaders: any;

  constructor() {
    this.requestHeaders = new Headers();
    this.requestHeaders.append('Accept', 'application/json');
    this.requestHeaders.append('Content-Type', 'application/json');
   }

}
