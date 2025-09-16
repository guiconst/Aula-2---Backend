const path = require('path');

console.log('🏠 === MONTANDO ENDEREÇOS === \n');

const endereco1 = path.join('pasta1', 'pasta2', 'arquivo.txt');
console.log('📁 Endereço 1:', endereco1);

const endereco2 = path.join('.', 'documentos', 'relatorio.pdf');
console.log('📄 Endereço 2:', endereco2);

const endereco3 = path.join('..', 'backup', 'dados.json');
console.log('💾 Endereço 3:', endereco3);

const endereco4 = path.join('usuarios', 'joao', 'projetos', 'meu-app', 'index.js');
console.log('🚀 Endereço 4:', endereco4);