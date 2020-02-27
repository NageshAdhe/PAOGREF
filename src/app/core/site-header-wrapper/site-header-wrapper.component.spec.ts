import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderWrapperComponent } from './site-header-wrapper.component';

describe('SiteHeaderWrapperComponent', () => {
  let component: SiteHeaderWrapperComponent;
  let fixture: ComponentFixture<SiteHeaderWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteHeaderWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeaderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
