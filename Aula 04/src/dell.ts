import {Laptop} from "./computador-base"
import {Gamer} from "./computador-base"

class Dell extends Laptop implements Gamer{
    memoriaVideo: number = 512;

    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor}%`);
    }
}