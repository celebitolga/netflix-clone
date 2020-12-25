import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiontvComponent } from './sectiontv.component';

describe('SectiontvComponent', () => {
  let component: SectiontvComponent;
  let fixture: ComponentFixture<SectiontvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiontvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiontvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
