import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent {
  title = input.required<string>();
  elements = input.required<string[]>();
  background = input('var(--main)');
  color = input('var(--color)');
}
