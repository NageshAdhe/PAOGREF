import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBreadcrumbComponent } from './site-breadcrumb.component';

describe('SiteBreadcrumbComponent', () => {
  let component: SiteBreadcrumbComponent;
  let fixture: ComponentFixture<SiteBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
