import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration5Component } from './registration-5.component';

describe('Registration5Component', () => {
  let component: Registration5Component;
  let fixture: ComponentFixture<Registration5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
