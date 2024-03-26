import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ImgSliderComponent } from '../../components/slider/img-slider/img-slider.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ImgSliderComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  activatedRoute = inject(ActivatedRoute);
  content = toSignal(this.activatedRoute.data);
}
