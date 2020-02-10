import {Component} from '@angular/core';

@Component({
  selector: 'app-prioridad',
  template: `
    <div class="prioridad m-0 p-0 mx-auto font-weight-light text-center">
      <i class="oi oi-chevron-top"
         [class.resaltada]="prioridad<10"
         [class.fueralimites]="prioridad >9"
         (click)="voto(1)"></i>
      <span class="align-middle">{{prioridad}}</span>
      <i class="oi oi-chevron-bottom"
         [ngClass]="{'resaltada':prioridad>0, 'fueralimites':prioridad<1}"
         (click)="voto(-1)"></i>
    </div>
  `,
  styles:[`
    .prioridad {
      font-size: .9em;
      line-height: .7;
    }
    .prioridad i{
      display:block;
      font-size: .8em;
    }
    .oi {
      color: #ccc;
    }
    .resaltada {
      color:red;
    }
    .fueralimites {
      pointer-events: none;
    }
    .oi:hover{
      cursor:pointer;
    }

  `]
})
export class PrioridadComponent {
  prioridad=0;

  voto(number: number) {
    this.prioridad+=number;
  }
}
