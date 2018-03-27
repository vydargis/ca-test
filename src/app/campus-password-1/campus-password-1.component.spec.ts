import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPassword1Component } from './campus-password-1.component';

describe('CampusPassword1Component', () => {
  let component: CampusPassword1Component;
  let fixture: ComponentFixture<CampusPassword1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusPassword1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusPassword1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
