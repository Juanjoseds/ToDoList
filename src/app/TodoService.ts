import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService{
  private items=[];

  constructor(private httpClient: HttpClient) {
    // NO ES LA FORMA CORRECTA
    //El get devuelve un observable
    /*this.httpClient.get("./assets/todo.json").subscribe((datos:any)=>this.items=datos);*/
  }

  getItems():Observable<any>{return this.httpClient.get("./assets/todo.json");}
}
