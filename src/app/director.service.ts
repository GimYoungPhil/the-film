import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Director } from './director';
import { DIRECTORS } from './mock-directors';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getDirectors(): Observable<Director[]> {
    this.messageService.add('DirectsService: fetched directors');
    return of(DIRECTORS);
  }
}
