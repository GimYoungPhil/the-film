import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Director } from './director';
import { DIRECTORS } from './mock-directors';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor() { }

  getDirectors(): Observable<Director[]> {
    return of(DIRECTORS);
  }
}
