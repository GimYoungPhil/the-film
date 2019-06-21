import { Component, OnInit } from '@angular/core';

import { Director } from '../director';
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-directors-list',
  templateUrl: './directors-list.component.html',
  styleUrls: ['./directors-list.component.scss']
})
export class DirectorsListComponent implements OnInit {
  directors: Director[];

  constructor(private directorService: DirectorService) { }

  ngOnInit() {
    this.getDirectors();
  }

  getDirectors(): void {
    this.directorService.getDirectors()
      .subscribe(directors => this.directors = directors);
  }

  backgroundImage(url: string): { } {
    return `url(${url})`;
  }

}
