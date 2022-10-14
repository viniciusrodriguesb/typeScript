import { Routes } from "@angular/router"
import { CategoriaComponent } from "./categoria/categoria.component";
import { PrincipalComponent } from "./principal/principal.component";
import { SobreComponent } from "./sobre/sobre.component";

export const ROUTES: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'categoria', component: CategoriaComponent}
];