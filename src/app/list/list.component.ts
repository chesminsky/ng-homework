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

  constructor() { }

  ngOnInit() {

  }

  onSelect(place: Place) {
    this.select.emit(String(place.id));
  }

}