//while
//while (condition) {
    // código se repete enquanto a condição for true
//}

//Contagem de 1 a 5

/*let contador = 1;

while (contador <= 5) {
    console.log("contagem:", contador);

    contador++
}

//contagem regressiva de 10 até 1

let tempo = 10;
console.log("Iniciando contagem regressiva...");

while (tempo > 0) {
    console.log(`${tempo}...`);

    tempo--
}
console.log("Feliz Ano Novo!!");

//Validação de Senha
const senhaCorreta = "123456";
let tentativa = "";
while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite a senha:");
    if (tentativa === senhaCorreta) {
        console.log("Senha Correta!");
    } else {
        console.log("Senha incorreta");
    }
}*/

// Somar múmeros até ultrapassar 100

/*let soma= 0;
let numero =1;

console.log("Somando números até passar de 100..");

while (soma <100) {
    soma += numero

    console.log(`${numero} Soma parcial: ${soma}`);

    numero++
}

console.log(`\n Precisou de ${numero - 1} números para ultrapassar 100`);
console.log("Soma final:" + soma);*/

/*const numero = Number(prompt("Qual número"));
if (Number.isNaN(numero)) {
    console.log("Digite um número válido!");
} else {
    let multiplicador = 1;
    console.log(`Tabuada do ${numero}\n`);

    while (multiplicador <= 10) {
    const resultado = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
}  multiplicador++;
}*/

/*let x = 10;
while (x < 5) {
    console.log("Isso não vai aparecer")
}

let y = 10;
do {
    console.log("Isso vai aparecer uma vez")
} while (y < 5);
*/

//Menu interativo
/**let opcao;

do {
    console.log("\n========Menu========");
    console.log("1 - ver saldo");
    console.log("2 - fazer depósito");
    console.log("3 - fazer saque");
    console.log("0 - ver sair");
    console.log("=================\n");

    opcao = prompt("Escolha uma opção:")

    if (opcao === "1") {
        console.log("se saldo é de 1000,00");
    } else if(opcao === "2") {
        console.log("Depósito realizado!");
    } else if (opcao === "3") {
        console.log("Saque realizado!");
    } else if (opcao === "0") {
        console.log("Até logo!")
    } else {
        console.log("Opção inválida!")
    }
} while (opcao !== "0");

//jogo: adivinhe o número
const numeroSecreto = Math.floor(Math.random () * 10) + 1;
// Match.random 0.0 0.999999999...
// * 10 0.0 9.99999...
// Match.flor 0 - 9
// + 1 0 - = 0 - 10/
let palpite;
let tentativas = 0;
console.log("Adivinhe o número entre 1 e 10");

do {
    palpite = Number(prompt("Seu palpite:"));
    tentativas++

    if (Number.isNaN(palpite)) {
        console.log("digite um número válido")
    } else if (palpite < numeroSecreto)
        console.log("Muito baixo! Tente Novamente")
    } else if (palpite > numeroSecreto) {
        console.log("Muito alto! Tente novamente")
    } else {
        console.log(`Acertou!!!! o número era ${numeroSecreto}`)
    };
    console.log(`Precisou de ${tentativas} tentativas!`)
} while (palpite !== numeroSecreto);
 */

//For
/*console.log("Contando de 1 a 10:\n");
for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`)
}
*/

// Tabuada
/*const numero = Number(prompt("Tabuada de qual número?"));
if (Number.isNaN(numero)) {
    console.log("Número inválido!")
} else {
    console.log(`\n Tabuada do ${numero}\n`);

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}*/

//Números pares (0 a 20)
/*console.log("Números pares de 0 a 20\n");

for (let i = 0; i <=20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

for (let i2 = 0; i2 <=20; i2 += 2) {
    console.log(i2)
}*/

/*console.log("Contagem regressiva")
for (let i = 10; i >= 1; i--) {
    console.log(`${i}...`)
}*/

/*const altura = 5;

for (let linha = 1; linha <= altura; linha++) {

    let asteriscos = "";

    for (let i = 1; i <= linha; i++) {
        asteriscos += "* "
    }
    console.log(asteriscos);
}*/

    //Array (lista)
    /*const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

    console.log(frutas [0]);
    console.log(frutas [1]);
    console.log(frutas [2]);
    console.log(frutas [3]);

    console.log(frutas.length);

    // for of
    /*(const item of frutas){
        console.log(`- ${frutas}`)
    }*/

//Soma de todos os números do array
/*const numeros = [10, 25, 8, 42, 15, 7];

let soma = 0;
for (const num of numeros) {
   soma += num;
}
console.log(soma);*/

//Objetos
/*const pessoa = {
    nome: "Lucas",
    idade: 35,
    cidade: "Santo André",
    profissão: "Professor"
}

console.log(pessoa.nome)
console.log(pessoa["idade"])

// for in
for (const chave in objeto) {

}
*/
/*const aluno = {
    nome: "Maria silva",
    matricula: "20223401",
    curso: "Desenvolvedor web",
    nota: 9.5
};

console.log("Dados do aluno:\n");
for (const chave in aluno) {
    const valor = aluno [chave]
    console.log(`${chave}: ${valor}`)
}*/

//Estoque de produtos
/*const estoque = {
    "Notebook": 15,
    "Mouse": 50,
    "Teclado": 30,
    "Monitor": 8,
    "Webcam": 22,
}

console.log("Estoque:\n");
for (const produto in estoque) {
    const quantidade = estoque[produto];

    if (quantidade < 10) {
        console.log(`${produto}: ${quantidade} unidades (estoque baixo!)`)
    } else {
        console.log(`${produto}: ${quantidade} unidades`)
    }
}*/

//carrinho de compra

//Array
/*const carrinho = [
    {produto: "Camiseta", preco: 49.90, quantidade: 2},
    {produto: "Calça Jeans", preco: 129.90, quantidade: 1},
    {produto: "Tenis", preco: 500.90, quantidade: 1},
];

let total = 0;

console.log("Carrinho de Compras:\n ");

for (const item of carrinho) {
    const subtotal = item.preco * item.quantidade;

    total += subtotal 

    console.log(`${item.produto} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}`)
}

console.log("\n" + "=".repeat(40));
console.log(`TOTAL: R${total.toFixed(2)}`);
*/

//break
/*const numeros = [5, 12, 8, 3, 19, 7, 25];

const procurado = 19;

console.log("Procurando o número", procurado);

for (const num of numeros) {
    console.log("Verificando:", num);

    if (num === procurado) {
        console.log("Encontrado!!")
        break;
    }

}
console.log("Loop terminou!")
*/

//Senha com limite de 3 tentativas

/*const senhaCorreta = "abc123";

const maxTentativas = 3;

for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    const senha = prompt(`Tentativa ${tentativa}/${maxTentativas} - Digite sua senha`);

    if (senha === senhaCorreta) {
        console.log("Acesso liberado!");
        break;
    } else {
        console.log("Senha Incorreta!");

        if (tentativa === maxTentativas) {
            console.log("Conta bloqueada!");
        }
    }
}*/

//continue

/*for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}*/

/*const alunos = [
    {nome: "Ana", nota: 8.5},
    {nome: "Bruno", nota: 5.0},
    {nome: "Carlos", nota: 9.0},
    {nome: "Diana", nota: 4.5},
    {nome: "Eduardo", nota: 7.5},
];
console.log("Alunos Aprovados:\n");
for (const aluno of alunos) {
    if (aluno.nota <7) {
        continue;
    }
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
}*/

const frase = prompt("Digite uma frase:");

const vogais = "aeiouAEIOU";

let contador = 0;

let vogaisEncontradas = [];

for (const letra of frase) {
    if (vogais.includes(letra)) {
        contador++
        vogaisEncontradas.push(letra)
    }
}
console.log(`\`n Frase: "${frase}"`);
console.log(`vogais encontradas: ${contador}`);
console.log(`vogais encontradas: ${vogaisEncontradas}`);