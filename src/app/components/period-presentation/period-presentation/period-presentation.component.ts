import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PeriodPresentations } from '../../../../types';
import { PeriodPresentationItemComponent } from '../period-presentation-item/period-presentation-item.component';
import { PurePipe } from '../../../pipe/pure.pipe';

@Component({
  selector: 'app-period-presentation',
  standalone: true,
  imports: [PeriodPresentationItemComponent, PurePipe, NgStyle],
  templateUrl: './period-presentation.component.html',
  styleUrl: './period-presentation.component.scss',
})
export class PeriodPresentationComponent {
  events = input<PeriodPresentations>([]);
  startFromBottom = input<boolean>(true);

  get timelineWidth() {
    const length = this.events().length;
    return length * 300 + length * 30 + 50;
  }

  sort(items: PeriodPresentations) {
    items.sort((a, b) => {
      return a.order - b.order;
    });

    return items;
  }
}
