import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManagementAutherityComponent } from './home-management-autherity.component';

describe('HomeManagementAutherityComponent', () => {
  let component: HomeManagementAutherityComponent;
  let fixture: ComponentFixture<HomeManagementAutherityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeManagementAutherityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManagementAutherityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
