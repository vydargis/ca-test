import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassword5Component } from './change-password-5.component';

describe('ChangePassword5Component', () => {
  let component: ChangePassword5Component;
  let fixture: ComponentFixture<ChangePassword5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassword5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassword5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
