export class Veiculo{
    cor: string; fabricante:string; modelo:string; velocidade:number;
   
     constructor(velocidade: number){
         this.velocidade = velocidade;
     }
 
     acelerar(velocidade:number): void{
        if(this.velocidade > velocidade){
            console.log(`Acelerando a... ${velocidade} km/h`);
        }else{
            console.log(`Acelerando a ${this.velocidade} km/h`)
        }
     }
 
     parar(): void{
         console.log('parando.....');
     }

     mostrarVelocidadeMaxima():void{
        console.log(`A velocidade maxima é: ${this.velocidade}`)
     }
 }