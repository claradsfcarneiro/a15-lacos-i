let coxinhasComidas = 0;
let conta = 0;

if (coxinhasComidas === 0) {
    if (prompt("Quer comer uma coxinha? S/N") === "S") {
        coxinhasComidas = 1;
        conta = 2.50;
    }
}

while (prompt("Quer comer mais uma coxinha? S/N") === "S") {
    coxinhasComidas++;
    conta = conta + 2.50
}

console.log(`Você comeu ${coxinhasComidas} coxinhas`);
console.log(`Sua conta é de R$${conta.toFixed(2)}`);