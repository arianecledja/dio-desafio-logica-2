 

function calcularSaldoDeVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

function rankearNivelDoHeroi(saldo) {
    let nivel
    if(saldo <= 10) {
        nivel = 'Ferro'
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = 'Bronze'
    } else if(saldo >= 21 && saldo <= 50) {
        nivel = 'Prata'
    } else if(saldo >= 51 && saldo <= 80) {
        nivel = 'Ouro'
    } else if(saldo >= 81 && saldo <= 90) {
        nivel = 'Diamante'
    } else if(saldo >= 91 && saldo <= 100) {
        nivel = 'Lendário'
    } else {
        nivel = 'Imortal'
    }

    return nivel
}

function main(vitorias, derrotas) {
    const saldo = calcularSaldoDeVitorias(vitorias, derrotas)
    const nivel = rankearNivelDoHeroi(saldo)
    console.log(`O Herói tem o saldo de ${saldo} e está no nível de ${nivel}`);
}

main(77,3)
