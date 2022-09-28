class Laptop{
    tela: number;

    constructor(tela: number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log('o monitor foi ligado');
    }
}

//EXTENDS TRAS PARA A NOVA CLASSE OS ATRIBUTOS E METODOS 
class Lenovo extends Laptop{
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor}%`);
    }
}

let computador = new Lenovo();

console.log(computador.tela + " Polegadas");
computador.ligarMonitor();
computador.aumentarBrilho(30);

//INTERFACE
interface Gamer{
    memoriaVideo: number;
}

class Dell extends Laptop implements Gamer{
    memoriaVideo: number = 512;

    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor}%`);
    }
}