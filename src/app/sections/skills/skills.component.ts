import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListContainerComponent } from '../../components/list-container/list-container.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ListContainerComponent],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
