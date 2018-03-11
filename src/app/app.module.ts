import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { WeatherComponent } from './weather/weather.component';
import { PlacesFilterPipe } from './places-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InfoComponent,
    WeatherComponent,
    PlacesFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
