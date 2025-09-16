const calc = require('./calculadora');

console.log('=== TESTANDO A CALCULADORA ===');
console.log('');

console.log('Soma:');
console.log('20 + 13 =', calc.somar(20, 13));
console.log('10 + 23 =', calc.somar(10, 23));
console.log('');

console.log('Subtração:');
console.log('44 - 11 =', calc.subtrair(44, 11));
console.log('55 - 22 =', calc.subtrair(55, 22));
console.log('');

console.log('Multiplicação:');
console.log('11 x 3 =', calc.multiplicar(11, 3));
console.log('6 x 2 =', calc.multiplicar(6, 2));
console.log('');

console.log('Divisão:');
console.log('66 ÷ 2 =', calc.divisao(66, 2));
console.log('99 ÷ 3 =', calc.divisao(99, 3));
console.log('33 ÷ 0 =', calc.divisao(33, 0));
console.log('');

console.log('=== TESTE CONCLUÍDO ===');