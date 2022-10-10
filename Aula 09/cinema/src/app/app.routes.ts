import { Routes } from "@angular/router"
import { PrincipalComponent } from "./principal/principal.component";
import { SobreComponent } from "./sobre/sobre.component";

export const ROUTES: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'sobre', component: SobreComponent}
];