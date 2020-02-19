import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ordenatareas',
  pure: false
})
export class OrdenaTareasPipe implements PipeTransform{
  transform(value: any, ordenaralfabetico): any {
    if (!value || value.length < 2) return value;
      value.sort((a: any, b: any) => {
        if(ordenaralfabetico == 1){
          if (a.action.toLowerCase() < b.action.toLowerCase()) return 1;
          else if (a.action.toLowerCase() > b.action.toLowerCase()) return -1;
          else return 0;
        }else if (ordenaralfabetico == 2) {
          if (a.action.toLowerCase() < b.action.toLowerCase()) return -1;
          else if (a.action.toLowerCase() > b.action.toLowerCase()) return 1;
          else return 0;
        }else if (ordenaralfabetico == 3) {
          if (a.prioridad < b.prioridad) return -1;
          else if (a.prioridad > b.prioridad) return 1;
          else return 0;
        }else if (ordenaralfabetico == 4) {
          if (a.prioridad < b.prioridad) return 1;
          else if (a.prioridad > b.prioridad) return -1;
          else return 0;
        }
      });
    return value;
  }

}
