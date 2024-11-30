import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toArray',
    standalone: false
})
export class ToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (new Array(value));
  }

}