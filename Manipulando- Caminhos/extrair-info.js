const path = require("path");

const arquivoCompleto = '/home/usuario/projetos/meu-app/src/index.js';
console.log('📁 Caminho Original:', arquivoCompleto);
console.log('');

const nomeArquivo = path.basename(arquivoCompleto);
console.log('📄 Nome Do Arquivo:', nomeArquivo);

const nomeSemExtensao = path.basename(arquivoCompleto, '.js');
console.log('📝 Nome Sem Extensão:', nomeSemExtensao);

const extensao = path.extname(arquivoCompleto);
console.log('🏷️ Extensão:', extensao);

const pastaPai = path.dirname(arquivoCompleto);
console.log('📂 Pasta Pai:', pastaPai);

console.log('\n === EXEMPLO PRÁTICO ===');

// FALTA TERMINAR ESSE BAGULHO!!!