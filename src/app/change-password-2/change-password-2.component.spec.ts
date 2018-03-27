import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassword2Component } from './change-password-2.component';

describe('ChangePassword2Component', () => {
  let component: ChangePassword2Component;
  let fixture: ComponentFixture<ChangePassword2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassword2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
