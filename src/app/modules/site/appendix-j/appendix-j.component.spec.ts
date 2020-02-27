import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendixJComponent } from './appendix-j.component';

describe('AppendixJComponent', () => {
  let component: AppendixJComponent;
  let fixture: ComponentFixture<AppendixJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppendixJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendixJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
