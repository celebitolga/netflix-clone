import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfaqComponent } from './sectionfaq.component';

describe('SectionfaqComponent', () => {
  let component: SectionfaqComponent;
  let fixture: ComponentFixture<SectionfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionfaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
