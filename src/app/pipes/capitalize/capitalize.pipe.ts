import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\w\S*/g, function(word){
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }

}
