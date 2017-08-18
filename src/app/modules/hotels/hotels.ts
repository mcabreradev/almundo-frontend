import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { HotelsService } from './hotels.service';
import { EventService } from '../../services/event.service';

import * as _ from 'lodash';

import filter from '../../libs/filter.lib.js';

export class Hotel {
  constructor(
    public name: string,
    public stars: string,
    public price: string
  ) {}
}

@Component({
  selector: 'almundo-hotels',
  template: require('./hotels.html'),
  providers: [HotelsService]
})
export class HotelsComponent implements OnInit {
  public hotels: Hotel[];
  public hotels_original: Hotel[];
  public stars_searches: Array<any> = [];
  public hotel: Hotel;

  constructor(private _hotelsService: HotelsService) {
    this.subscribeOrderByEvent();
    this.subscribeStars();
    this.subscribeHotel();
  }

  ngOnInit() {
     this._hotelsService.getAll()
      .subscribe(
        result => {
          this.hotels =  _.sortBy(result, ['price']);
          this.hotels_original =  this.hotels;
        },
        error => console.error('Error: ', error)
        );
  }

  subscribeOrderByEvent() {
    EventService
      .get('orderBy')
      .subscribe(value => {
        const _value = value.split('-');
        this.hotels = _value[1] === 'ASC' ? _.sortBy(this.hotels, [_value[0]]) : _.reverse(_.sortBy(this.hotels, [_value[0]]));
      });
  }

  subscribeStars() {
    EventService
      .get('stars')
      .subscribe(hotel => {
        let stars_searches = [];

        if (_.isEqual(hotel.stars.length, 0)) {
          this.hotels = this.hotels_original;
          return;
        }

        hotel.stars.map(star => {
          filter(this.hotels_original, {stars: star}).map(hotel => {
            stars_searches.push(hotel);
          });
        });

        this.hotels = _.uniq(stars_searches);
      });
  }

  subscribeHotel() {
    EventService
      .get('hotel')
      .subscribe( value => this.hotels = _.isUndefined(value.name) || value.name === '' ? this.hotels_original : filter(this.hotels_original, value.name));
  }
}
