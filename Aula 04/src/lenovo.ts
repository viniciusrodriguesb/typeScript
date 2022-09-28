import {Laptop} from "./computador-base";

//EXTENDS TRAS PARA A NOVA CLASSE OS ATRIBUTOS E METODOS 
export class Lenovo extends Laptop{
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor}%`);
    }
}

