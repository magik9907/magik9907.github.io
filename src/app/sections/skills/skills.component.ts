import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
