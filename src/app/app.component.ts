import {Component, OnDestroy} from '@angular/core';
import {isBooleanLiteralLike} from "codelyzer/util/utils";
import {isBoolean} from "util";
import {TodoService} from "./TodoService";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = "Lista de DAW's";
  model = {
    user: 'Daw',
    items: []

  };
  suscripcion=Subscription;
  mostrarTodas = true;
  ordenaralfabetico: number = 1;

  constructor(private todoService:TodoService) {
    // this.ordenaTareas();
    //this.model.items = todoService.getItems();
    this.subscripcion=todoService.getItems().subscribe((data:any)=>this.model.items=data);
  }

  TnIncompletas() {
    let count = 0;
    if (this.model.items)
      this.model.items.forEach((item, index) => !item.done ? count++ : true);
    return count;
  }

  addItem(tarea) {
    //console.log(tarea);
    let nuevoId = Math.random().toString(36).substr(2, 10);
    this.model.items.push({id: nuevoId, action: tarea, done: false, prioridad: 4});
    // this.ordenaTareas();
  }

  removeItem(id) {
    let i = this.model.items.findIndex((item: any) => item.id == id, id);
    this.model.items.splice(i, 1);
  }

  nuevaPrioridad($event: any, id) {
    //console.log(i);
    let i = this.model.items.findIndex((item: any) => item.id == id, id);
    this.model.items[i].prioridad = $event;
  }

  ordenar(id) {
    if (id == 1) {
      this.ordenaralfabetico = 1;
    }
    if (id == 2) {
      this.ordenaralfabetico = 2;
    }
    if (id == 3) {
      this.ordenaralfabetico = 3;
    }
    if (id == 4) {
      this.ordenaralfabetico = 4;
    }
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
