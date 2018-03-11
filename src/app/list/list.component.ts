import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../places';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input()
  public places: Place[];

  @Input()
  @Output()
  public selected: Place;

  @Output()
  public select: EventEmitter<string> = new EventEmitter();

  public types: placeType[] = [{
    name: 'Hotels',
    value: 'hotel'
  }, {
    name: 'Apartments',
    value: 'apartments'
  }, {
    name: 'Guest houses',
    value: 'guest_house'
  }];

  public currentType: placeType;

  constructor() { }

  ngOnInit() {

  }

  public toggleType(event: MouseEvent, type: placeType) {

    event.preventDefault();

    if (!this.currentType || this.currentType.value !== type.value) {
      this.currentType = type;
    } else {
      this.currentType = null;
    }
  }

  public onSelect(place: Place) {
    this.select.emit(String(place.id));
  }

  public getTypeName(type) {
    const t = this.types.find(t => t.value === type);
    return t.name || '';
  }

}

interface placeType {
  name: string;
  value: string;
}