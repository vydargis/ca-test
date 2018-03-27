import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration8Component } from './registration-8.component';

describe('Registration8Component', () => {
  let component: Registration8Component;
  let fixture: ComponentFixture<Registration8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
