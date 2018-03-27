import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassword3Component } from './change-password-3.component';

describe('ChangePassword3Component', () => {
  let component: ChangePassword3Component;
  let fixture: ComponentFixture<ChangePassword3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassword3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassword3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
