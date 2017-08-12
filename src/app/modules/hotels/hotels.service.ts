import { Injectable } from '@angular/core';
import { HttpService }  from '../../services/http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelsService {

  constructor(private _http: HttpService) { }

  getAll() {
    return this._http
        .get('hotels')
        .map(res => res.json().hotels);
  }

}
