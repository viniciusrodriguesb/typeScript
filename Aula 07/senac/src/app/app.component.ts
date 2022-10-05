import { Component } from '@angular/core';

@Component({
  selector: 'snc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  anaClara  = {nome: 'Ana Clara', aprovado: true, escola: 'Senac'};
  vinicius  = {nome: 'Vinicus', aprovado: false, escola: 'Senac'};
}
