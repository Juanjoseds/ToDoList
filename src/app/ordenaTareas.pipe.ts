import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ordenatareas',
  pure: false
})
export class OrdenaTareasPipe implements PipeTransform{
  transform(value: any, ordenaralfabetico): any {
    if(!value || value.length <2 ) return value;
    if(ordenaralfabetico == true){
      value.sort((a:any,b:any)=>{
        console.log("ordena true");
        if(a.action.toLowerCase()<b.action.toLowerCase()) return 1;
        else if (a.action.toLowerCase()>b.action.toLowerCase()) return -1;
        else return 0;
      });
    }else{
      value.sort((a:any,b:any)=>{
        console.log("ordena false");
        if(a.action.toLowerCase()<b.action.toLowerCase()) return -1;
        else if (a.action.toLowerCase()>b.action.toLowerCase()) return 1;
        else return 0;
      });
    }
    return value;
  }

}
