import {Component, OnDestroy, OnInit} from "@angular/core";
import {fromEvent, pipe, Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import {subscriptionLogsToBeFn} from "rxjs/internal/testing/TestScheduler";
declare var $:any;

@Component({
  selector: 'reactive',
  template: `
    <input type="text" class="form-control" id="search" placeholder="Search...">

    <div class="container mt-3">
      <div class="row row-cols-3">

        <div class="mb-2" *ngFor=" let i=index; let item of datos?.items">
        <div class="col">
          <div class="card card-search" style="width: 18rem;">
            <img src="{{datos.items[i].media.m}}" class="card-img-top imgflikr" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{datos.items[i].title}}</h5>
              <p class="card-text">{{datos.items[i].date_taken}}</p>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']

})
export class ReactiveComponent implements OnInit, OnDestroy{
  keyups:any;
  flickerApi="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  subscripcion:Subscription;
  datos:any;

  constructor() {}
  ngOnInit(){
    // JQUERY para capturar lo que se escribe en el input
    // OBSERVABLE
    this.keyups = fromEvent($('#search'), 'keyup')
    .pipe(
      // Obtenemos el valor del json
      map((e:any)=>e.target.value),
      // Filtros como que no se busque si no tiene mas de 3 caracteres o si aun está escribiendo, etc..
      filter(text=>text.length>3),
      debounceTime(400),  //Tiempo de espera cuando termines de escribir para enviar la petición
      distinctUntilChanged(), //Si te mueves con las flechas no reenvia la misma petición al servidor
      switchMap(searchTErm =>{
        let promesa = $.getJSON(this.flickerApi,{
          tags:searchTErm,
          tagmode: "all",
          format: "json"
        });
        let observable = fromPromise(promesa);
        return observable;
      })
    );
    // NOS SUSCRIBIMOS A LO QUE PASE
    this.subscripcion= this.keyups.subscribe(
      // FUNCIÓN ANONIMA
      (data:any) =>{
        this.datos = data;
        console.log(this.datos.items[0]);
      },
      (error:any) => console.log("error", error),
      () => console.log("completado")
    );
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}
