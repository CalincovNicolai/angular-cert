import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToDuration'
})
export class MinToDurationPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return null;
  }
}
