function somar(a,b){
    return a + b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function divisao(a,b){
    if (b === 0){
        return 'Erro: Divisão Por Zero!';
    }
    return a / b;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    divisao
};