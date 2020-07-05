
// Define váriaveis para o cálculo do IMC padrão
const nome = 'Gabriel';
const peso = 115;
const altura = 1.72;

// Defini a lógica para o cálculo utilizando váriaveis já pré-estabelecidas
const imc = peso / (altura * altura);

// Lógica para a resposta do cálculo de IMC
if (imc >= 30) {
    console.log(`${nome} você está acima do peso!`);
} else {
    console.log(`${nome} você não está acima do peso!`);
}