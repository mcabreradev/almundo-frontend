import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing, RootComponent} from './routes';

import {HotelsModule} from './modules/hotels';

import {MainComponent} from './components/main/main';
import {HeaderComponent} from './components/header/header';
import {TitleComponent} from './components/title/title';
import {FooterComponent} from './components/footer/footer';

import { ApiService }  from './services/api.service';
import { HttpService }  from './services/http.service';
import { EventService }  from './services/event.service';

@NgModule({
  providers: [
    ApiService,
    HttpService,
    EventService,
  ],
  imports: [
    routing,
    BrowserModule,
    HotelsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
