import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-slider.component.html',
  styleUrl: './img-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgSliderComponent {
  sources = input.required<string[]>();
  current = signal<number>(0);
  currentSource = computed<string>(() => {
    let idx = this.current();
    if (idx >= this.sources().length) idx = 0;
    return this.sources()[idx];
  });

  setImage(idx: number) {
    this.current.set(idx);
  }
}
