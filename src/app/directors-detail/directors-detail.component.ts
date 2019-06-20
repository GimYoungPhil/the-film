import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Director } from '../director';
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-directors-detail',
  templateUrl: './directors-detail.component.html',
  styleUrls: ['./directors-detail.component.scss']
})
export class DirectorsDetailComponent implements OnInit {
  director: Director;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private directorService: DirectorService,
  ) { }

  ngOnInit() {
    this.getDirector();
  }

  getDirector(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.directorService.getDirector(id)
      .subscribe(director => this.director = director);
  }

}
