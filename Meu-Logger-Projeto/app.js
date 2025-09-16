const math = require('./math.js');

console.log('=== TESTANDO O MÓDULO MATEMÁTICO ===');

const resultadoSoma = math.somar(20, 13);
console.log('Resultado Da Soma:',resultadoSoma);

const resultadoMultiplicacao = math.multiplicar(11, 3);
console.log('Resultado Da Multiplicação:', resultadoMultiplicacao)

const resultadoDivisao = math.divisao(66, 2);
console.log('Resultado Da Divisão:', resultadoDivisao);

const divisaoPorZero = math.divisao(33, 0);
console.log('Divisão Por Zero:', divisaoPorZero);

console.log('=== TESTE CONCLUÍDO ===')