const fs = require('fs').promises

async function  escreverMeuArquivo() {
    try {
        console.log('✍️ Criando Um Novo Arquivo...');

        const meuTexto = `Arquivo Criado Pelo Node.js!
        Data: ${new Date().toLocaleString()}
        Este Arquivo Foi Gerado Automaticamente.`;

        await fs.writeFile('arquivo-criado.txt', meuTexto, 'utf-8');
        
        console.log('✅ Arquivo "arquivo-criado.txt" Criado Com Sucesso!');
        console.log('📄 Conteúdo Escrito:');
        console.log('—'.repeat(40));
        console.log(meuTexto);
        console.log('—'.repeat(40));
}
catch (error){
    console.error('❌ Erro Ao Escrever Arquivo:', error.message);
    }
}

escreverMeuArquivo();