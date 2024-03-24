import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActiveFragmentLinkDirective } from '../../directive/active-fragment-link.directive';

@Component({
  selector: 'app-welcom',
  standalone: true,
  imports: [RouterModule, ActiveFragmentLinkDirective],
  templateUrl: './welcom.component.html',
  styleUrl: './welcom.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WelcomComponent {}
