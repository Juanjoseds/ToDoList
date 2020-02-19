import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {PrioridadComponent} from './prioridad.component';
import {OrdenaTareasPipe} from './ordenaTareas.pipe';
import { FiltroDonePipe } from './filtro-done.pipe';
import {CallbackHell} from './callbackHell';

@NgModule({
  declarations: [
    AppComponent,
    PrioridadComponent,
    OrdenaTareasPipe,
    FiltroDonePipe,
    CallbackHell
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
