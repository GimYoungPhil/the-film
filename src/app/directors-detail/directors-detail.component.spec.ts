import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsDetailComponent } from './directors-detail.component';

describe('DirectorsDetailComponent', () => {
  let component: DirectorsDetailComponent;
  let fixture: ComponentFixture<DirectorsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
