let numeroTabuada = 1;
let numeroInput = Number(prompt("Digite um número"));
let resultadoMultiplicacao;

console.log(`A tabuada do número ${numeroInput} é a seguinte:`)
while (numeroTabuada <= 10) {
    resultadoMultiplicacao = numeroInput * numeroTabuada;
    console.log(`${numeroInput} x ${numeroTabuada} = ${resultadoMultiplicacao}`);
    numeroTabuada++;
}
