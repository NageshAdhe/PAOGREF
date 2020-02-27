import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQualityPolicyComponent } from './home-quality-policy.component';

describe('HomeQualityPolicyComponent', () => {
  let component: HomeQualityPolicyComponent;
  let fixture: ComponentFixture<HomeQualityPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQualityPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQualityPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
