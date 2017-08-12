import {Component} from '@angular/core';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'almundo-title',
  template: require('./title.html')
})
export class TitleComponent {

  onChange(event : any) {
    EventService
      .get('orderBy')
      .emit(event.target.value);
  }
}
