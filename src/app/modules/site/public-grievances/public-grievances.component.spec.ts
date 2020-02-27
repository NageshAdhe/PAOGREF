import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGrievancesComponent } from './public-grievances.component';

describe('PublicGrievancesComponent', () => {
  let component: PublicGrievancesComponent;
  let fixture: ComponentFixture<PublicGrievancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicGrievancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicGrievancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
