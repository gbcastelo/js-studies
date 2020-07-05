// Cria um array de usuários, onde dentro do atributo tecnologias, um novo array é criado com todas tecnologias do usuário
const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: [
            'HTML',
            'CSS'
        ]
    },
    {
        nome: 'Jasmine',
        tecnologias: [
            'JavaScript',
            'CSS'
        ]
    },
    {
        nome: 'Tuane',
        tecnologias: [
            'HTML',
            'Node'
        ]
    }
];

// Itera o usuário, e retorna todas as tecnologias dentro do array tecnologias, dentro do array de objetos usuarios
// O uso do "join" especifca uma string para separar cada atributo do array
for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`);
}