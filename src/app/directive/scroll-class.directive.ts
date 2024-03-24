import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollClass]',
  standalone: true,
})
export class ScrollClassDirective {
  @HostBinding('style.display')
  display = this.getStyle();
  @HostListener('window:scroll') onscroll() {
    this.display = this.getStyle();
  }

  private getStyle() {
    return window.scrollY > 0 ? 'block' : 'none';
  }
}
