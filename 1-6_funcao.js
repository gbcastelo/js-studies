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
    },
    {
        nome: 'Gabriel',
        tecnologias: [
            'CSS',
            'Javascript',
            'PHP'
        ]
    }
];

// Cria função que percorre as tecnologias do usuário e confere se CSS está dentro do array de tecnologias
function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] === 'CSS') {
            return true;
        }
    }
}

// Itera em todos os usuários, com a função de check iterando nas tecnologias
for (let z = 0; z < usuarios.length; z++) {
    const temCss = checaSeUsuarioUsaCSS(usuarios[z]);

    if (temCss) {
        console.log(`O usuário ${usuarios[z].nome} trabalha com CSS!`);
    }
}