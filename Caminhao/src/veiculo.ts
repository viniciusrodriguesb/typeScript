export class Veiculo{
    cor: string; fabricante:string; modelo:string;
   
     constructor(cor:string, fabricante:string, modelo:string){
         this.cor = cor;
         this.fabricante = fabricante;
         this.modelo = modelo;
     }
 
     acelerar(){
         console.log('acelerando....');
     }
 
     parar(){
         console.log('parando.....');
     }
 }