// Cria um array de objetos, onde as receitas e despesas são outro array de números
const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio", 
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

// Função para calcular o saldo passando um array de receitas e despesas, e que utiliza a função de somar números para retornar apenas um número no final
function calculaSaldo(receitas, despesas) {
    const receita = somaNumeros(receitas);
    const despesa = somaNumeros(despesas);

    return receita - despesa;
}

// Recebe um array de números e percorre o array somando todos
function somaNumeros(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    };

    return soma;
}

// Itera os usuários e faz o cáluco do saldo, dando a resposta de positivo ou negativo com o calculo final no terminal
for (let z = 0; z < usuarios.length; z++) {
    const total = calculaSaldo(usuarios[z].receitas, usuarios[z].despesas)

    if (total > 0) {
        console.log(`${usuarios[z].nome} possui saldo POSITIVO de ${total}`);
    } else {
        console.log(`${usuarios[z].nome} possui saldo NEGATIVO de ${total}`);
    }
}