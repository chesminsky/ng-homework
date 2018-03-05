import { Component, OnInit, Input } from '@angular/core';

import { places$, Place } from './places';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  public places: Place[];
  public selected: Place;

  ngOnInit() {
    places$.subscribe((places: Place[]) => {
      this.selected = places[0];
      this.places = places;
    });
  }

  public onSelect(id: string) {
    this.selected = this.places.find(p => p.id === parseInt(id));
  }
}
