import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePageNotFoundComponent } from './site-page-not-found.component';

describe('SitePageNotFoundComponent', () => {
  let component: SitePageNotFoundComponent;
  let fixture: ComponentFixture<SitePageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
