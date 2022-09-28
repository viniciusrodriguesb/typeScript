export class Laptop{
    tela: number;

    constructor(tela: number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log('o monitor foi ligado');
    }
}

//INTERFACE
export interface Gamer{
    memoriaVideo: number;
}