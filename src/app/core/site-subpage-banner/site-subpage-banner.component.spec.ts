import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSubpageBannerComponent } from './site-subpage-banner.component';

describe('SiteSubpageBannerComponent', () => {
  let component: SiteSubpageBannerComponent;
  let fixture: ComponentFixture<SiteSubpageBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSubpageBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSubpageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
