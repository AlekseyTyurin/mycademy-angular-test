import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'convertEmailToName'})
export class ConvertEmailToName implements PipeTransform {
  transform(name: string): any {
    if (!name) return
    const arr = name.split('.');

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2
  }
}
