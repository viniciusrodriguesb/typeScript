import { Component } from '@angular/core';
import { Estudante } from './estudante/estudante.model';

@Component({
  selector: 'snc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudantes: Estudante[] = 
[
  {nome: 'Ana Clara', aprovado: true, escola: 'Senac'},
  {nome: 'Vinicus', aprovado: false, escola: 'Senac'}
]}
