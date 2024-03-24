import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure: true,
  standalone: true,
})
export class PurePipe implements PipeTransform {
  transform(value: any, func: (a: any) => any): any {
    return func(value);
  }
}
