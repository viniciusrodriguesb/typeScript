import {Laptop} from "./computador-base";
import { Lenovo } from "./lenovo";

let computador = new Lenovo();

console.log(computador.tela + " Polegadas");
computador.ligarMonitor();
computador.aumentarBrilho(30);