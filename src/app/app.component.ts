import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Lista de DAW's";
  model = {
    user: 'Daw',
    items: [
      {action: "estudiar daw", done: false, prioridad: 4},
      {action: "ayudar a mami", done: false, prioridad: 3},
      {action: "ver Netflix", done: true, prioridad: 8},
      {action: "recoger", done: false, prioridad: 2},
    ]
  };

  constructor() {
    this.ordenaTareas();
  }

  TnIncompletas(){
    let count=0;
    if (this.model.items)
      this.model.items.forEach((item,index)=>!item.done? count++:true);
    return count;
  }

  addItem(tarea){
    //console.log(tarea);
    this.model.items.push({action: tarea, done: false, prioridad: 4});
    this.ordenaTareas();
  }

  nuevaPrioridad($event: any,i) {
    //console.log(i);
    this.model.items[i].prioridad=$event;
  }

  ordenaTareas(){
    this.model.items.sort((a:any,b:any)=>{
      if(a.action.toLowerCase()<b.action.toLowerCase()) return -1;
      else if (a.action.toLowerCase()>b.action.toLowerCase()) return 1;
      else return 0;
    })

  }
}
