function multiplicacao(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(2, 4);
const mensagemSaudacao = saudacao("Thiago");

console.log(mensagemSaudacao);
console.log("O resultado da multiplicação é:", resultadoMultiplicacao);