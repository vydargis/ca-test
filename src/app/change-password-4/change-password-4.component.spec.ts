import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassword4Component } from './change-password-4.component';

describe('ChangePassword4Component', () => {
  let component: ChangePassword4Component;
  let fixture: ComponentFixture<ChangePassword4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassword4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassword4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
