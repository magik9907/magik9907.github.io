import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodPresentationItemComponent } from './period-presentation-item.component';

describe('PeriodPresentationItemComponent', () => {
  let component: PeriodPresentationItemComponent;
  let fixture: ComponentFixture<PeriodPresentationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodPresentationItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodPresentationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
