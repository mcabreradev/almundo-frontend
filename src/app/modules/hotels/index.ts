import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';

import {HotelsComponent} from './hotels';
import {HotelComponent} from './hotel/hotel';
import {FiltersComponent} from './filters/filters';

import { NumberToArrayPipe }  from '../../pipes/number-to-array.pipe';
import { MoneyPipe }  from '../../pipes/money.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    HotelsComponent,
    HotelComponent,
    FiltersComponent,
    NumberToArrayPipe,
    MoneyPipe
  ],
  exports: [
    HotelsComponent
  ]
})
export class HotelsModule {}
