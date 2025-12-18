import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar'
})
export class MillionDollarPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return null;
  }
}
