const fs = require('fs').promises;

async function verificarArquivo(nomeArquivo){
    try{
        console.log(`🔍 Verificando Se "${nomeArquivo}" Existe...`);
        await fs.access(nomeArquivo);

        console.log(`✅ O Arquivo "${nomeArquivo}" Existe!`);
        return true;
    } 
    catch (error) {
        console.log(`❌ O Arquivo "${nomeArquivo}" NÃO Existe!`);
        return false;
    }
}

async function testarArquivos() {
    console.log('=== VERIFICANDO ARQUIVOS ===\n');

    const arquivos = [
        'dados.txt',
        'arquivo-criado.txt',
        'arquivo-inexistente.txt',
        'package.json'
    ];

    for (const arquivo of arquivos) {
        await verificarArquivo(arquivo);
        console.log('');
    }
    console.log('=== VERIFICAÇÃO CONCLUÍDA ===');
}

testarArquivos();

async function garantirArquivo(nomeArquivo, conteudoPadrao){
    const existe = await verificarArquivo(nomeArquivo);

    if(!existe){
        console.log(`📝 Criando Arquivo "${nomeArquivo}" Com Conteúdo Padrão...`);
        await fs.writeFile(nomeArquivo, conteudoPadrao, 'utf-8');
        console.log(`✅ Arquivo "${nomeArquivo}" Criado!`);
    }
}

async function exemploAvancado(){
    await garantirArquivo('config.txt', 'configuracao=padrao\nversao=1.0');
}