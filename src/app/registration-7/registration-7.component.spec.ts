import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration7Component } from './registration-7.component';

describe('Registration7Component', () => {
  let component: Registration7Component;
  let fixture: ComponentFixture<Registration7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
