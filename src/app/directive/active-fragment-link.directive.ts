import {
  Directive,
  ElementRef,
  HostBinding,
  Signal,
  effect,
  inject,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Directive({
  selector: '[appActiveFragmentLink]',
  standalone: true,
  hostDirectives: [RouterLink],
})
export class ActiveFragmentLinkDirective {
  private routerLink: RouterLink = inject(RouterLink);
  private router: ActivatedRoute = inject(ActivatedRoute);

  appActiveFragmentLink = input<string>();
  link = input<string>('');

  routingFragment: Signal<string | null | undefined> | null = null;

  @HostBinding('class.active')
  get isActive() {
    return this.appActiveFragmentLink() === this.routingFragment?.()
      ? 'active'
      : '';
  }

  constructor() {
    effect(() => {
      this.routerLink.fragment = this.appActiveFragmentLink();
      this.routerLink.routerLink = this.link();
    });
    this.routingFragment = toSignal(this.router.fragment);
  }
}
