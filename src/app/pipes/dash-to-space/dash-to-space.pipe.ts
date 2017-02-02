import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashToSpace'
})
export class DashToSpacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/-/g, ' ');
  }

}
