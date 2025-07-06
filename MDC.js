const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMDC(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

function perguntar() {
    rl.question('Digite o primeiro número (ou "sair" para encerrar): ', (num1) => {
        if (num1.toLowerCase() === 'sair') {
            console.log('Encerrando o programa...');
            rl.close();
            return;
        }

        rl.question('Digite o segundo número: ', (num2) => {
            if (num2.toLowerCase() === 'sair') {
                console.log('Encerrando o programa...');
                rl.close();
                return;
            }

            const numero1 = parseInt(num1);
            const numero2 = parseInt(num2);

            if (isNaN(numero1) || isNaN(numero2)) {
                console.log('Por favor, digite números válidos.');
            } else {
                const mdc = calcularMDC(numero1, numero2);
                console.log(`O MDC de ${numero1} e ${numero2} é: ${mdc}`);
            }

            perguntar();
        });
    });
}

perguntar();
