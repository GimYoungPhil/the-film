import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Director } from './director';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  private directorUrl = 'api/directors';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getDirectors(): Observable<Director[]> {
    const url = `${this.directorUrl}.json`;
    return this.http.get<Director[]>(url)
      .pipe(
        tap(_ => this.log('fetched directors')),
        catchError(this.handleError<Director[]>('getDirectors', []))
      );
  }

  getDirector(id: string): Observable<Director> {
    const url = `${this.directorUrl}/${id}.json`;
    return this.http.get<Director>(url)
      .pipe(
        tap(_ => this.log(`fetched director id=${id}`)),
        catchError(this.handleError<Director>(`getDirector id=${id}`))
      );
  }

  private log(message: string): void {
    this.messageService.add(`DirectorService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
