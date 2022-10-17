import { Categoria } from "./categoria1/categoria1.model";
import { CINEMA_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class CategoriasService{
    categorias: Categoria[] = [];
      
    constructor(private http: HttpClient){

    }

    listarCategorias(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>(`${CINEMA_API}/categorias`)
                                .pipe(catchError(ErrorHandler.handleError));
    }
}