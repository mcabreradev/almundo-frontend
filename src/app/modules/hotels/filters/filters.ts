import {Component} from '@angular/core';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'almundo-filters',
  template: require('./filters.html')
})
export class FiltersComponent {
  public filters: any = {};

  onClick(stars: any) {
    this.filters.stars = stars;
    EventService
      .get('stars')
      .emit(this.filters);
  }

  filtrar(name: any) {
    this.filters.name = name;
    EventService
      .get('hotel')
      .emit(this.filters);
  }
}
