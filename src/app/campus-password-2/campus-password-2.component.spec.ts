import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPassword2Component } from './campus-password-2.component';

describe('CampusPassword2Component', () => {
  let component: CampusPassword2Component;
  let fixture: ComponentFixture<CampusPassword2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusPassword2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusPassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
