export function cumprimentar(nome){
    return `Olá, ${nome}! Bem-Vindo Ao ES6 modules!`;
}

export function calcularIdade(anoNascimento){
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

export const PI = 3.14159265359;

export default function despedir(nome){
    return `Tchau, ${nome}! Até A Próxima!`;
}