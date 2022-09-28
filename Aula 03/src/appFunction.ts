let temMaisTitulos = function(titulos : number) : boolean{
    return titulos < 35;
}

let numero = 8;

// PASSOU A VARIAVEL ATRAVES DA TEMPLATE STRING ------ CHAMOU A FUNCTION ATRAVES DA TEMPLATE STRING E UTILIZOU EXPRESSÃO TERNÁRIA 
console.log(`Ter ${numero} é suficiente para passar o ...? ${temMaisTitulos(8) ? `SIM` : `NÃO`}`);