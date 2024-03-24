import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PeriodPresentation } from '../../../../types';
import { PurePipe } from '../../../pipe/pure.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-period-presentation-item',
  standalone: true,
  imports: [DatePipe, PurePipe, MatIconModule],
  templateUrl: './period-presentation-item.component.html',
  styleUrl: './period-presentation-item.component.scss',
})
export class PeriodPresentationItemComponent {
  item = input.required<PeriodPresentation>();
  index = input.required<number>();

  positionCalculate(idx: number) {
    return `${idx * 300 + idx * 30 + 50}px`;
  }
}
