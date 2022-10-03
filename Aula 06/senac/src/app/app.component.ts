import { Component } from '@angular/core';

@Component({
  selector: 'S-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos = {nome: 'João do pé de feijão', aprovado: true};
}
