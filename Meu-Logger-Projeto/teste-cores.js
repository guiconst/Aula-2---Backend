const colors = require('colors');
function testarCores() {
    console.log('🎨 Testando o pacote Colors!');
    console.log('');

    console.log('Esse Texto é Vermelho!'.red);
    console.log('Esse Texto é Verde!'.green);
    console.log('Esse Texto é Azul!'.blue);
    console.log('Esse Texto é Amarelo!'.yellow);
    console.log('Esse Texto é Magenta!'.magenta);
    console.log('Esse Texto é Ciano!'.cyan);

    console.log('');

    console.log('Esse Texto Está Em Negrito!'.bold);
    console.log('Esse Texto Está Sublinhado!'.underline);
    console.log('Esse Texto Está Invertido!'.inverse);

    console.log('');

    console.log('Texto Verde e Negrito!'.green.bold);
    console.log('Texto Azul e Sublinhado!'.blue.underline);
    console.log('Texto Vermelho e Invertido!'.red.inverse);

    console.log('');

    console.log('Texto Com o Fundo Vermelho'.bgRed);
    console.log('Texto Com o Fundo Verde'.bgGreen);
    console.log('Texto Branco Com Fundo Azul'.white.bgBlue);

    console.log('');
    console.log('🎉 Teste Concluído! Seu Terminal Agora Tem Cores!'.rainbow);
}

testarCores();