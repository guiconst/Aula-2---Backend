const { listarArquivos, mostrarResultados} = require('./fileExplorer');
const path = require('path');

async function testarExplorador() {
    console.log('🚀 Iniciando Teste Do Explorador De Arquivos...');

    const pastaAtual = __dirname;
    console.log(`📂 Pasta a Ser Explorada: ${pastaAtual}`);

    try{
        const arquivos = await listarArquivos(pastaAtual);
        mostrarResultados(arquivos);
        console.log('\n ✅ Teste Concluído Com Sucesso!');
    } catch (error){
        console.error('\n ❌ Erro Durante o Teste:', error.message);
    }
}

testarExplorador();