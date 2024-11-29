async function fazerBoloDeCenoura() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const perguntar = (pergunta) => new Promise((resolve) => readline.question(pergunta, resolve));

    console.log("Processo de fazer bolo de cenoura com cobertura de chocolate!");

    let massaPronta = false;
    while (!massaPronta) {
        console.log("== Preparo da Massa ==");
        console.log("Misture os ingredientes da massa.");
        massaPronta = (await perguntar("A massa está pronta? (sim/não): ")).toLowerCase() === "sim";
    }

    let boloAssado = false;
    while (!boloAssado) {
        console.log("== Assando o Bolo ==");
        console.log("Asse o bolo no forno.");
        boloAssado = (await perguntar("O bolo está assado e frio? (sim/não): ")).toLowerCase() === "sim";
    }

    let coberturaPronta = false;
    while (!coberturaPronta) {
        console.log("== Preparo da Cobertura ==");
        console.log("Misture os ingredientes da cobertura.");
        coberturaPronta = (await perguntar("A cobertura está pronta? (sim/não): ")).toLowerCase() === "sim";
    }

    console.log("== Finalizando o Bolo ==");
    if ((await perguntar("O bolo está pronto para servir? (sim/não): ")).toLowerCase() === "sim") {
        console.log("Parabéns! Seu bolo está pronto!");
    } else {
        console.log("Finalize o bolo e aproveite!");
    }

    readline.close();
}

fazerBoloDeCenoura();
