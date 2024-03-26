import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodPresentation } from '../../../../types';
import { PurePipe } from '../../../pipe/pure.pipe';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-period-presentation-item',
  standalone: true,
  imports: [CommonModule, PurePipe, MatIconModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
