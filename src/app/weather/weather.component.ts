import { Component, OnInit, Input } from '@angular/core';

import { Place } from '../places';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public selected: Place;

  constructor() { }

  ngOnInit() {
  }

}
