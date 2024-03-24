import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodPresentationComponent } from './period-presentation.component';

describe('PeriodPresentationComponent', () => {
  let component: PeriodPresentationComponent;
  let fixture: ComponentFixture<PeriodPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
