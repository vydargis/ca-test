import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPassword3Component } from './campus-password-3.component';

describe('CampusPassword3Component', () => {
  let component: CampusPassword3Component;
  let fixture: ComponentFixture<CampusPassword3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusPassword3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusPassword3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
