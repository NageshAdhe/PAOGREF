import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTopbarComponent } from './site-topbar.component';

describe('SiteTopbarComponent', () => {
  let component: SiteTopbarComponent;
  let fixture: ComponentFixture<SiteTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
