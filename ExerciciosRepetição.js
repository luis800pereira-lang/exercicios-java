// 1 Contando de 1 a 10
/*for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`)
}*/

// 2 Tabuada de um Número
/*let numero = Number(prompt("Digite um Número:"));

for (let i2 = 1; i2 <= 10; i++) {
    const resultado = numero * i2;
    console.log(`${numero} x ${i} = ${resultado}`);
}*/

// 3 Soma de 1 até N

/*const N = Number(prompt("Digite um número:"));
let soma = 0;
for (let i = 1; i <= N; i++) {
    soma += i;
}

console.log(`Soma de 1 até ${N} = ${soma}`);
*/

// 1 Exibir os números pares de 1 a 50
/*console.log("Números pares de 0 a 50\n");

for (let i = 0; i <=50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}*/


// 3 COntagem regressiva
let tempo = 15;
console.log("Começando contagem regressiva...");

while (tempo > 0) {
    console.log(`${tempo}...`);

    tempo--
}
console.log("Feliz Natal!!");

