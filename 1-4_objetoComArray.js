// Constroi um objeto de nome programador e atribui um array dentre um dos atributos para inserir várias tecnologias
const programador = {
    nome: 'Gabriel',
    idade: 26,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop',
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web'
        },
        {
            nome: 'PHP',
            especialidade: 'Back-end'
        }
    ]
};

// Imprime no terminal o nome, idade, e a primeira tecnologia do array
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);
