let diasDaSemana: Array<string> = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];

let semana = (dia: string = 'Domingo') => {return dia};

console.log(`Hoje é ${semana(diasDaSemana[Math.floor(Math.random() * 6)])}`);
//O math random sorteia o INDICE DO ARRAY, o math floor localiza qual string posicionada no indice.
