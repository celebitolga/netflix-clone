import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionmobileComponent } from './sectionmobile.component';

describe('SectionmobileComponent', () => {
  let component: SectionmobileComponent;
  let fixture: ComponentFixture<SectionmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
