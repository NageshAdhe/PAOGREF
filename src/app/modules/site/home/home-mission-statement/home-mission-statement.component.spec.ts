import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMissionStatementComponent } from './home-mission-statement.component';

describe('HomeMissionStatementComponent', () => {
  let component: HomeMissionStatementComponent;
  let fixture: ComponentFixture<HomeMissionStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMissionStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMissionStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
