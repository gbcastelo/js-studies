// Constroi um objeto onde dentro dele, um objeto intercalado é criado para definir o endereço da empresa
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

// Imprimi no terminal o endereço utilizando o objeto intercalado criado
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);