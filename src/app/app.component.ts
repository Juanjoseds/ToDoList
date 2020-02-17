import { Component } from '@angular/core';
import {isBooleanLiteralLike} from "codelyzer/util/utils";
import {isBoolean} from "util";

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
  mostrarTodas = true;
  ordenaralfabetico: number = 1;

  constructor() {
    // this.ordenaTareas();
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
      console.log("HAS PULSADO Y ES 1");
      this.ordenaralfabetico = 1;
    }

    if (id == 2) {
      console.log("HAS PULSADO Y ES 2");
      this.ordenaralfabetico = 2;
    }

    if (id == 3) {
      console.log("HAS PULSADO Y ES 3");
      this.ordenaralfabetico = 3;
    }

    if (id == 4) {
      console.log("HAS PULSADO Y ES 4");
      this.ordenaralfabetico = 4;
    }
  }
}
