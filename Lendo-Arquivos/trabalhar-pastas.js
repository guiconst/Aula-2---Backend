const fs = require('fs').promises;

async function criarPasta(nomePasta){
    try {
        console.log(`📁 Criando Pasta "${nomePasta}"...`);

        await fs.mkdir(nomePasta);

        console.log(`✅ Pasta "${nomePasta}" Criada Com Sucesso!`);
    }
    catch (error) {
    if (error.code === 'EEXIST') {
        console.log(`⚠️ A Pasta "${nomePasta}" Já Existe.`);
    } else{
        console.error('❌ Erro Ao Criar Pasta:', error.message);
        }
    }
}

async function listarArquivos(nomePasta){
    try {
        console.log(`📋 Listando Arquivos Da Pasta "${nomePasta}":`);

        if (arquivos.lenght === 0){
            console.log('   (pasta vazia)');
        }  else {
            arquivos.forEach((arquivo, index) =>{
                console.log(`   ${index + 1}. ${arquivo}`);
            });
        }

    } catch (error){
        console.error(`❌ Erro Ao Listar Pasta "${nomePasta}":`, error.message);
    }
}

async function exemploComPastas() {
    console.log('=== TRABALHANDO COM PASTAS === \n');

    await criarPasta('minha-pasta-teste');
    console.log('');

    await listarArquivos('.');
    console.log('');

    await listarArquivos('minha-pasta-teste');

    console.log('\n === EXEMPLO CONCLUÍDO ===');
}

exemploComPastas();