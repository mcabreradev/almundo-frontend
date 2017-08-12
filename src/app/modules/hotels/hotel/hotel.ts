import {Component, Input} from '@angular/core';
import {Hotel} from '../hotels';

@Component({
  selector: 'almundo-hotel',
  template: require('./hotel.html'),
})
export class HotelComponent {
  @Input() public hotel: Hotel;
}
