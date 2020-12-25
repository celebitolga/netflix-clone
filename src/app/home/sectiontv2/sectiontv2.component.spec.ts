import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sectiontv2Component } from './sectiontv2.component';

describe('Sectiontv2Component', () => {
  let component: Sectiontv2Component;
  let fixture: ComponentFixture<Sectiontv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sectiontv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sectiontv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
