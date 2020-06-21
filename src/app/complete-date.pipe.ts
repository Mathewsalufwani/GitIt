import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completeDate'
})
export class CompleteDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
