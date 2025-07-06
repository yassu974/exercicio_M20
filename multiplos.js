function somaMultiplos(limite, divisores) {
    let soma = 0;

    for (let i = 1; i < limite; i++) {
        for (let divisor of divisores) {
            if (i % divisor === 0) {
                soma += i;
                break; // evita contar o mesmo número mais de uma vez
            }
        }
    }

    return soma;
}

const limite = 1000;
const divisores = [5, 7];

console.log(`A soma de todos os múltiplos de ${divisores.join(' ou ')} abaixo de ${limite} é: ${somaMultiplos(limite, divisores)}`);
