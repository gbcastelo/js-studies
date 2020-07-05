// Defini propriedades utilizando váriaveis para serem acessadas e implementadas na lógica
const nome = 'Gabriel';
const sexo = 'M';
const idade = 26;
const contribuicao = 8;

// Primeiro é verificado se o usuário é homem e tem mais de 35 anos de contribuição
if (sexo === 'M' && contribuicao >= 35) {
    // Se sim, ele faz o cálculo génerico para verificar se está ou não apto a aposentar
    if (contribuicao + idade >= 95) {
        console.log(`${nome} você está apto a se aposentar!`);
    } else {
        console.log(`${nome} você não está apto a se aposentar!`);
    }
// O mesmo acontece para a mulher, apenas mudando as diretrizes
} else if(sexo === 'F' && contribuicao >= 30) {
    if (contribuicao + idade >= 85) {
        console.log(`${nome} você está apta a se aposentar!`);
    } else {
        console.log(`${nome} você não está apta a se aposentar!`);
    }
// Else criado para caso o usuário não se enquadrar em nenhum quesito
} else {
    console.log(`${nome} você não está apto(a) a se aposentar!`);
}