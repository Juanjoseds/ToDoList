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
      {action: "estudiar daw", done: false},
      {action: "ayudar a mami", done: false},
      {action: "ver Netflix", done: true},
      {action: "recoger", done: false},
    ]
  }

}
