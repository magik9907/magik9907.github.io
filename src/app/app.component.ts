import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomComponent } from './sections/welcom/welcom.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperianceComponent } from './sections/experiance/experiance.component';
import { AboutComponent } from './sections/about/about.component';
import { RouterOutlet } from '@angular/router';
import { ActiveFragmentLinkDirective } from './directive/active-fragment-link.directive';
import { ScrollClassDirective } from './directive/scroll-class.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    WelcomComponent,
    SkillsComponent,
    ExperianceComponent,
    AboutComponent,
    ActiveFragmentLinkDirective,
    ScrollClassDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
