const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function encontrarIndices(arr) {
    if (arr.length === 0) {
        console.log("O array está vazio.");
        return;
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[indiceMaior]) {
            indiceMaior = i;
        }
        if (arr[i] < arr[indiceMenor]) {
            indiceMenor = i;
        }
    }

    console.log(`Índice do maior valor (${arr[indiceMaior]}): ${indiceMaior}`);
    console.log(`Índice do menor valor (${arr[indiceMenor]}): ${indiceMenor}`);
}

function perguntarArray() {
    rl.question("Digite um array de números separados por vírgula (ou 'sair' para encerrar): ", (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Encerrando o programa...");
            rl.close();
            return;
        }

        const numeros = input.split(',').map(num => Number(num.trim()));

        if (numeros.some(isNaN)) {
            console.log("Entrada inválida. Por favor, digite apenas números separados por vírgula.");
        } else {
            encontrarIndices(numeros);
        }

        perguntarArray(); // Chama novamente para repetir
    });
}

perguntarArray();

