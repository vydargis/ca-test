import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration6Component } from './registration-6.component';

describe('Registration6Component', () => {
  let component: Registration6Component;
  let fixture: ComponentFixture<Registration6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
