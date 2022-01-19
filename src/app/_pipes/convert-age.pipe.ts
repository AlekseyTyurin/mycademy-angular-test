import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'convertBirthdayToAge'})
export class ConvertBirthdayToAge implements PipeTransform {
  transform(date: Date | string | undefined): number | undefined {

    if(!date) return;
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
