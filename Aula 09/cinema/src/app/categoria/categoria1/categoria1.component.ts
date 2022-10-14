import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from './categoria1.model';

@Component({
  selector: 'cin-categoria1',
  templateUrl: './categoria1.component.html'
})
export class Categoria1Component implements OnInit {

  @Input() categoria!: Categoria;

  constructor() { }

  ngOnInit(): void {
  }
}