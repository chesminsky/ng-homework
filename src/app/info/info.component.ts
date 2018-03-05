import { Component, OnInit, Input } from '@angular/core';

import { Place } from '../places';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input()
  public selected: Place;

  constructor() { }

  ngOnInit() {
  }

}
