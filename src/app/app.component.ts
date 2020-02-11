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
      {id: "aaaaabbbbb", action: "estudiar daw", done: false, prioridad: 4},
      {id: "bbbbbccccc", action: "ayudar a mami", done: false, prioridad: 3},
      {id: "cccccddddd", action: "ver Netflix", done: true, prioridad: 8},
      {id: "dddddeeeee", action: "recoger", done: false, prioridad: 2},
    ]
  };
  mostrarTodas=true;

  constructor() {
   // this.ordenaTareas();
  }

  TnIncompletas(){
    let count=0;
    if (this.model.items)
      this.model.items.forEach((item,index)=>!item.done? count++:true);
    return count;
  }

  addItem(tarea){
    //console.log(tarea);
    let nuevoId=Math.random().toString(36).substr(2,10);
    this.model.items.push({id: nuevoId, action: tarea, done: false, prioridad: 4});
   // this.ordenaTareas();
  }

  nuevaPrioridad($event: any,id) {
    //console.log(i);
    let i= this.model.items.findIndex((item:any)=>item.id==id, id);
    this.model.items[i].prioridad=$event;
  }

/*  ordenaTareas(){
    this.model.items.sort((a:any,b:any)=>{
      if(a.action.toLowerCase()<b.action.toLowerCase()) return -1;
      else if (a.action.toLowerCase()>b.action.toLowerCase()) return 1;
      else return 0;
    })
  }*/
}
