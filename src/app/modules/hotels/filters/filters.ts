import {Component, OnInit} from '@angular/core';
import { EventService } from '../../../services/event.service';
import * as _ from 'lodash';

@Component({
  selector: 'almundo-filters',
  template: require('./filters.html')
})
export class FiltersComponent {
  public filters: any = {};

  public items: Array<any>;
  public stars: Array<any>;
  public showAll: Boolean = false;

  // tslint:disable-next-line:no-empty
  constructor() {}

  ngOnInit() {
    this.checkboxSelectAll(this.showAll);
  }

  checkboxSelectAll(checked: any) {
    this.stars = [
        {value: 5, checked: checked},
        {value: 4, checked: checked},
        {value: 3, checked: checked},
        {value: 2, checked: checked},
        {value: 1, checked: checked},
      ];
    this.filters.stars = [];
    this.showAll = !this.showAll;
  }

  onClick(star: any) {
    this.toggleCheckbox(star);
    EventService
      .get('stars')
      .emit(this.filters);
  }

  toggleCheckbox(star: any) {

    if (_.isEqual(star, 0)) {
      this.checkboxSelectAll(this.showAll);
      this.filters.stars = [];
      return;
    }

    let index = this.filters.stars.indexOf(star);
    index > -1 ? this.filters.stars.splice(index, 1) : this.filters.stars.push(star);

    return this.filters;
  }

  filtrar(name: any) {
    this.filters.name = name;
    EventService
      .get('hotel')
      .emit(this.filters);
  }
}
