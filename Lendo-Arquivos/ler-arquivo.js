const fs = require('fs').promises;

async function lerMeuArquivo(){
    try {
        console.log('🤖 Robô: "Vou Tentar Ler o Arquivo dados.txt..."');

        const conteudo = await fs.readFile('dados.txt', 'utf-8');

        console.log('✅ Robô: "Consegui Ler! Aqui Está:"');
        console.log('📄 Conteúdo Que o Robô Encontrou:');
        console.log('—'.repeat(33));
        console.log(conteudo);
        console.log('—'.repeat(33));
    }
    catch (error){
        console.error('❌ Robô: "Ops! Deu Ruim:"', error.message);

        if (error.code === 'ENOENT'){
            console.log('🤖 Robô: "O Arquivo dados.txt Não Existe!"');
            console.log('💡 Dica: Crie o Arquivo Na Mesma Pasta Que Este Código.');
        }
    }
}

lerMeuArquivo();