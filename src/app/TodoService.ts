import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";
import {fromPromise} from "rxjs/internal-compatibility";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodoService{
  private items=[];
  private itemsRef:AngularFireList<any>;

  constructor(private httpClient: HttpClient,
              private fdb:AngularFireDatabase,
              private fauth: AngularFireAuth) {
    // NO ES LA FORMA CORRECTA
    //El get devuelve un observable
    /*this.httpClient.get("./assets/todo.json").subscribe((datos:any)=>this.items=datos);*/
    this.fauth.authState.subscribe(
      (data)=>console.log("logged in:", data),
      (error)=>console.log("Error en el login", error),
      ()=>console.log("auth complete")
    );
    this.itemsRef=this.fdb.list('todo');
  }

  getItems():Observable<any>{
    return this.httpClient.get("./assets/todo.json");
  }

  getFireItems():Observable<any>{
    // return this.fdb.list('todo').valueChanges();
    return this.fdb.list('todo').snapshotChanges()
    .pipe(
      map((changes:any) =>
        changes.map((c:any)=>{
          return {
            key: c.payload.key,
            id: c.payload.val().id,
            action: c.payload.val().action,
            done: c.payload.val().done,
            prioridad: c.payload.val().prioridad
          }
        })))
  }

  addItem(item){
    this.itemsRef.push(item);
  }

  removeItem(key){
    this.itemsRef.remove(key);
  }

  update(item){
    this.itemsRef.update(item.key, {
      action:item.action,
      done:item.done,
      prioridad:item.prioridad,
      id:item.id
    });
  }

  // Función para cuando el usuario se loguea
  login():Observable<any>{
    return fromPromise(this.fauth.auth.signInWithEmailAndPassword("daw2todolist@test.com", "123456"));
  }

  logout(){
    this.fauth.auth.signOut();
  }

}
