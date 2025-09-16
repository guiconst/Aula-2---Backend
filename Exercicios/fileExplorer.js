const fs = require('fs').promises
const path = require('path');

async function listarArquivos(diretorio){
    console.log(`🔍 Explorando: ${diretorio}`);

    const arquivos = [];

    try {
        const items = await fs.readdir(diretorio);
        console.log(`📂 Encontrados ${items.length} Itens em: ${diretorio}`);

        for (const item of items){
            const fullPath = path.join(diretorio, item);
            const stats = await fs.stat(fullPath);

            if (stats.isDirectory()) {
                console.log(`📁 Pasta Encontrada: ${item}`);
                const subArquivos = await listarArquivos(fullPath);
                arquivos.push(...subArquivos);
            } else{
                console.log(`📄 Arquivo Encontrado: ${item}`);
                arquivos.push(fullPath);
            }
        }
    }   catch (error) {
        console.error(`❌ Erro Ao Explorar ${diretorio}:`, error.message);
    }

    return arquivos;
}

function mostrarResultados(arquivos){
    console.log('\n 📊 RELATÓRIO FINAL:');
    console.log(`Total De Arquivos Encontrados: ${arquivos.length}`);

    if (arquivos.length > 0){
        console.log('\n 📋 Lista De Arquivos:');
        arquivos.forEach((arquivo, index) => {
            console.log(`${index + 1}. ${arquivo}`);
        });
    }
}

module.exports = {
    listarArquivos,
    mostrarResultados
};