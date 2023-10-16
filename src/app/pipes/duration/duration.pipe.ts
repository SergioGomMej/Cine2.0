import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutos: number): string {
    if (minutos < 60) {
      return minutos + ' min';
    } else {
      const horas = Math.floor(minutos / 60);
      const min = minutos % 60;
      return horas + 'hrs ' +  min + 'mins';
    }
  }

}
