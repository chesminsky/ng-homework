import { Pipe, PipeTransform } from '@angular/core';
import {Place} from './places';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {
  transform(places: Place[], type: string) {

    let out;

    if (!type) {
      out = places;
    } else {
      out = places.filter(p => p.type === type);
    }

    return out; 
  }
}
