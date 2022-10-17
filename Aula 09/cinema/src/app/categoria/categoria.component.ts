import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categoria.service';
import { Categoria } from './categoria1/categoria1.model';

@Component({
  selector: 'cin-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {
  categorias!: Categoria[];
  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
   this.categoriaService.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }
}